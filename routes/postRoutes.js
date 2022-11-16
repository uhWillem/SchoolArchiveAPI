const express = require("express"); // Import express
const postControllers = require("../controllers/postControllers"); // Import postControllers
const router = express.Router(); // Create router

// @route GET && POST - /posts/
router
    .route("/") // Route to /
    .get(postControllers.getAllLeerlingen) // GET request to get all leerlingen
    .post(postControllers.createNewLeerling); // POST request to create a new leerling

router.route("/id/:id").get(postControllers.getLeerlingByID); // GET request to get a leerling by ID.
router.route("/ait").get(postControllers.getAITLeerlingen); // GET request to get all AIT leerlingen.
router.route("/itn").get(postControllers.getITNLeerlingen); // GET request to get all AIT leerlingen.
router.route("/omc").get(postControllers.getOMCLeerlingen); // GET request to get all AIT leerlingen.
router.route("/mo").get(postControllers.getMOLeerlingen); // GET request to get all AIT leerlingen.
module.exports = router; // Export router
