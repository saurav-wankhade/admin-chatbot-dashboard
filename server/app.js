// server/app.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/chat", (req, res) => {
  const question = req.body.question;

  const responses = {
    "What is today's revenue?": "Today's revenue is $12,430.",
    "How many users signed up this week?": "248 users have signed up this week.",
    "Show me last month's performance": "Last month's performance exceeded expectations by 18%."
  };

  res.json({
    answer: responses[question] || "Sorry, I don't understand that question."
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
