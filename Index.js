const express = require("express");
const app = express();
const PORT = 3000;

// Root Endpoint
app.get("/app", (req, res) => {
  res.send("Welcome to the Simple Node.js API!");
});

// API 1: Get User Info
app.get("/user", (req, res) => {
  const { id } = req.query;

  if (!id) {
    return res.status(400).send({ error: "User ID is required" });
  }

  const user = {
    id,
    name: "Kalpa",
    email: "kalpa@yahoo.com",
  };

  res.send(user);
});

// API 2: Calculate Sum
app.get("/sum", (req, res) => {
  const { a, b } = req.query;

  if (!a || !b) {
    return res
      .status(400)
      .send({ error: "Both query parameters a and b are required" });
  }

  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    return res
      .status(400)
      .send({ error: "Query parameters a and b must be valid numbers" });
  }

  const sum = numA + numB;
  res.send({ a: numA, b: numB, sum });
});

// API 3: Greet User
app.get("/greet", (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).send({ error: "Name query parameter is required" });
  }

  res.send({ message: `Hello, ${name}! Welcome to our API.` });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
