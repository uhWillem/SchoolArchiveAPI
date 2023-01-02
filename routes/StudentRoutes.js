const express = require("express"); // Import express
const StudentController = require("../controllers/StudentController"); // Import StudentController
const router = express.Router(); // Create router

// @route GET && POST - /students/
router
    .route("/students/") // Route to /
    .get(StudentController.getAllStudents) // GET request to get all leerlingen
    .post(StudentController.createNewStudent); // POST request to create a new leerling

// @route GET && DELETE && PATCH - /students/id/:id
router
    .route("/students/id/:id")
    .get(StudentController.getStudentById) // GET request to get a leerling by ID.
    .delete(StudentController.deleteStudentById) // DELETE request to delete a leerling by ID
    .put(StudentController.updateStudentById); // UPDATE request to update a leerling by ID.

router.route("/students/course").get(StudentController.getStudentsByCourse); // GET request to get all AIT leerlingen.

router.route("/students/count").get(StudentController.getCountCourses); // GET request to get total count voor alle richtingen.


module.exports = router; // Export router
