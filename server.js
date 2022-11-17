require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP

const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(express.json()); // parse json bodies in the request object
app.use(cors()); // allow cross origin requests

// Redirect requests to endpoint starting with /posts to postRoutes.js
app.use("/api/leerlingen", require("./routes/postRoutes"));

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
