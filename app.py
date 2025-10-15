from flask import Flask, render_template, request, jsonify
import tensorflow as tf
import joblib
import numpy as np

app = Flask(__name__)

# --- Load your model and vectorizer once at startup ---
model = tf.keras.models.load_model("model/sentiment_model.keras")
vectorizer = joblib.load("model/tfidf_vectorizer.pkl")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    # Get JSON data from the frontend
    data = request.get_json()
    text = data.get("text", "")

    # Convert text to the same format used in training
    X = vectorizer.transform([text])

    # Predict sentiment probabilities
    preds = model.predict(X)
    label_index = np.argmax(preds, axis=1)[0]
    label_map = {0: "Negative", 1: "Neutral", 2: "Positive"}
    sentiment = label_map[label_index]

    return jsonify({"sentiment": sentiment})

if __name__ == "__main__":
    app.run(debug=True)
