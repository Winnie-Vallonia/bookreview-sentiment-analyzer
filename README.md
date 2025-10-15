# 📚 BookReview Sentiment Analyzer

An elegant web app that uses a TensorFlow-powered AI model to analyze the sentiment behind book reviews.  
Trained on real book review data, this app helps uncover whether a review conveys positive, neutral, or negative emotions — all wrapped in a cozy, book-themed interface.

---

## ✨ Features

- 🧠 **AI Model:** Feedforward neural network trained on book review data  
- 💬 **Real-time Predictions:** Analyze text instantly via Flask API  
- 🎨 **Literary-Themed UI:** Designed like an open book, with warm tones and gentle animations  
- ⚡ **Full-Stack Setup:** Flask backend + HTML/CSS/JS frontend  
- 💻 **Local or Deployable:** Runs locally or easily deploys to Render, Railway, or Hugging Face Spaces  

---

## 🧩 Tech Stack

| Layer | Tools |
|:------|:------|
| **Frontend** | HTML, CSS, JavaScript |
| **Backend** | Flask |
| **Modeling** | TensorFlow, scikit-learn (TF–IDF vectorizer) |
| **Data** | Custom book reviews dataset |

---

## 🚀 Getting Started

### 1️⃣ Clone the repo

git clone https://github.com/Winnie-Vallonia/bookreview-sentiment-analyzer.git
cd bookreview-sentiment-analyzer

### 2️⃣ Install dependencies
pip install -r requirements.txt

### 3️⃣ Run the app
python app.py


### 🪄 Behind the Scenes

The model was trained in Google Colab on a dataset of book reviews.

Text data was preprocessed using a TF–IDF vectorizer.

A neural network classifier was built and saved in the .keras format.

Flask loads the model and vectorizer to serve predictions via REST API.

The frontend sends user input via fetch() and displays real-time results.

🧑‍💻 Built with love by Winnie Nna
