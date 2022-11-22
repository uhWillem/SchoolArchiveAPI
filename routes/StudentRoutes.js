const express = require("express"); // Import express
const StudentController = require("../controllers/StudentController"); // Import StudentController
const router = express.Router(); // Create router

// @route GET && POST - /posts/
router
    .route("/") // Route to /
    .get(StudentController.getAllStudents) // GET request to get all leerlingen
    .post(StudentController.createNewStudent); // POST request to create a new leerling

router
    .route("/id/:id")
    .get(StudentController.getStudentByID) // GET request to get a leerling by ID.
    .delete(StudentController.deleteStudentById); // DELETE request to delete a leerling by ID

router.route("/ait").get(StudentController.getAITStudents); // GET request to get all AIT leerlingen.
router.route("/itn").get(StudentController.getITNStudents); // GET request to get all ITN leerlingen.
router.route("/omc").get(StudentController.getOMCStudents); // GET request to get all OMC leerlingen.
router.route("/mo").get(StudentController.getMOStudents); // GET request to get all MO leerlingen.
router.route("/count").get(StudentController.getCountRichtingen); // GET request to get total count voor alle richtingen.

module.exports = router; // Export router

