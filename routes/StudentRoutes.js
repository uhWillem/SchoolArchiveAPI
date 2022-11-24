const express = require("express"); // Import express
const StudentController = require("../controllers/StudentController"); // Import StudentController
const router = express.Router(); // Create router

// @route GET && POST - /posts/
router
    .route("/students/") // Route to /
    .get(StudentController.getAllStudents) // GET request to get all leerlingen
    .post(StudentController.createNewStudent); // POST request to create a new leerling

router
    .route("/students/id/:id")
    .get(StudentController.getStudentByID) // GET request to get a leerling by ID.
    .delete(StudentController.deleteStudentById); // DELETE request to delete a leerling by ID

router.route("/students/ait").get(StudentController.getAITStudents); // GET request to get all AIT leerlingen.

router.route("/students/itn").get(StudentController.getITNStudents); // GET request to get all ITN leerlingen.

router.route("/students/omc").get(StudentController.getOMCStudents); // GET request to get all OMC leerlingen.

router.route("/students/mo").get(StudentController.getMOStudents); // GET request to get all MO leerlingen.

router.route("/students/count").get(StudentController.getCountRichtingen); // GET request to get total count voor alle richtingen.


module.exports = router; // Export router
