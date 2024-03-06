require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Create Express app
const app = express();

// Middleware
app.use(
  cors({
    origin: "https://deploy-me-wip.netlify.app",
  })
);

// Middleware for parsing JSON bodies from HTTP requests
app.use(express.json());

const userName = process.env.DB_USER_NAME;
const password = process.env.DB_PASSWORD;
const uri = `mongodb+srv://${userName}:${password}@sig-cluster-0.6un9uuo.mongodb.net/?retryWrites=true&w=majority&appName=sig-cluster-0`;

// Connect to MongoDB
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

// Routes
app.get("/", (req, res) => {
  res.send("Hello and welcome to the backend!");
});

// Import routes
const productRoutes = require("./routes/productRoutes");
app.use("/products", productRoutes); // Use productRoutes for paths starting with /products


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Server initialization
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
