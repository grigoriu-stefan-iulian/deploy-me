const express = require("express");
const cors = require("cors");

// Create Express app
const app = express();

// Middleware
app.use(
  cors({
    origin: "https://deploy-me-wip.netlify.app/",
  })
);

// Routes
app.get("/", (req, res) => {
  res.send("Hello and welcome to the backend!");
});

app.get("/api/products", (req, res) => {
  const products = [
    { id: 1, name: "Handmade Necklace", price: 25.99 },
    { id: 2, name: "Knitted Scarf", price: 19.99 },
    { id: 3, name: "Wooden Coasters", price: 14.99 },
  ];

  res.json(products);
});

// Server initialization
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
