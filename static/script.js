const result = document.getElementById("result");
const button = document.getElementById("analyzeBtn");

button.addEventListener("click", async () => {
    const text = document.getElementById("userInput").value.trim();

    if (!text) {
        result.textContent = "Please write a review first!";
        result.style.color = "#b71c1c";
        return;
    }

    result.textContent = "Analyzing...";
    result.style.color = "#5d4037";

    const response = await fetch("/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
    });

    const data = await response.json();
    const sentiment = data.sentiment;

    let color, emoji;
    if (sentiment === "Positive") {
        color = "#2e7d32";
        emoji = "😊";
    } else if (sentiment === "Negative") {
        color = "#c62828";
        emoji = "😞";
    } else {
        color = "#ef6c00";
        emoji = "😐";
    }

    result.style.transition = "all 0.5s ease";
    result.textContent = `${emoji} Predicted Sentiment: ${sentiment}`;
    result.style.color = color;
});
