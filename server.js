require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP

const express = require("express");

// cors explanation https://www.youtube.com/watch?v=EdJ6RJ3uGbo
const cors = require("cors");
const app = express();

const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./swagger.json");

// Middleware
app.use(express.json()); // parse json bodies in the request object
app.use(cors()); // allow cross origin requests

// Redirect requests to endpoint starting with /posts to postRoutes.js
app.use("/api/students", require("./routes/StudentRoutes"));

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went really wrong",
  });
});

// Listen on pc port
const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
