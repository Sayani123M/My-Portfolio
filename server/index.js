const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Server is running");
  });
// Route for the contact form
app.post("/contact", (req, res) => {
  const { name, email, query } = req.body;

  if (!name || !email || !query) {
    return res.status(400).json({ message: "All fields are required" });
  }

  console.log(`Contact Form Submission:
  Name: ${name}
  Email: ${email}
  Query: ${query}`);

  // Respond to the frontend
  res.status(200).json({ message: "Query submitted successfully!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
