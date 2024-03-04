const express = require("express");
const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    { id: 1, name: "Handmade Necklace", price: 25.99 },
    { id: 2, name: "Knitted Scarf", price: 19.99 },
    { id: 3, name: "Wooden Coasters", price: 14.99 },
  ];

  res.json(products);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
