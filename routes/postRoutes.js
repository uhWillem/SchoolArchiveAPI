const express = require("express"); // Import express
const postControllers = require("../controllers/postControllers"); // Import postControllers
const router = express.Router(); // Create router

// @route GET && POST - /posts/
router
    .route("/") // Route to /
    .get(postControllers.getAllLeerlingen) // GET request to get all leerlingen
    .post(postControllers.createNewLeerling); // POST request to create a new leerling

router.route("/:id").get(postControllers.getLeerlingByID); // GET request to get a leerling by ID.
router.route("/ait").get(postControllers.getAITLeerlingen); // GET request to get all AIT leerlingen.
module.exports = router; // Export router
