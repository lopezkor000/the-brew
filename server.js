const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// API route for chatbot communication
app.post("/api/chatbot", async (req, res) => {
  const { query } = req.body;

  // This is where you'd call Google Gemini or any other chatbot API.
  // For now, we'll simulate a simple response.
  try {
    const botResponse = {
      answer: `You said: ${query}. This is a simulated response!`,
    };

    res.status(200).json(botResponse);
  } catch (error) {
    console.error("Error communicating with chatbot:", error);
    res.status(500).json({ error: "Something went wrong with the chatbot." });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
