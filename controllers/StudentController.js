const Student = require("../models/Students.js");

exports.getAllStudents = async (req, res, next) => {
    try {
        const [students, _] = await Student.findAll();

        res.status(200).json({
            totalcount: students.length,
            students,
        });
    } catch (error) {
        next(error);
    }
};

exports.getStudentById = async (req, res, next) => {
    try {
        let id = req.query.id;
        const [student, _] = await Student.findById(id);

        res.status(200).json({ student });
    } catch (error) {
        next(error);
    }
};

exports.createNewStudent = async (req, res, next) => {
    try {
        let {
            first_name,
            last_name,
            course,
            birthyear,
            sex,
            email,
            phone_number,
            city,
            note,
        } = req.body;

        let student = new Student(
            first_name,
            last_name,
            course,
            birthyear,
            sex,
            email,
            phone_number,
            city,
            note,
        );

        student = await student.save();

        res.status(201).json({ message: "Student created" });
    } catch (error) {
        next(error);
    }
};

exports.getStudentById = async (req, res, next) => {
    try {
        let id = req.params.id;
        const [student, _] = await Student.findById(id);

        res.status(200).json({ student });
    } catch (error) {
        next(error);
    }
};

exports.updateStudentById = async (req, res, next) => {
    try {
        let id = req.params.id;
        const [student, _] = await Student.updateById(id, req.body.first_name, req.body.last_name, req.body.course,
            req.body.birthyear, req.body.sex, req.body.email, req.body.phone_number, req.body.city, req.body.note);

        res.status(200).json({ "message": "Successfully update student", "student": student });
    } catch (error) {
        next(error);
    }
};

exports.deleteStudentById = async (req, res, next) => {
    try {
        let id = req.params.id;
        const [student, _] = await Student.deleteById(id);

        res.status(200).json({ student });
    } catch (error) {
        next(error);
    }
};

exports.updateStudentById = async (req, res, next) => {
    try {
        let id = req.params.id;
        // add code to get the data from the request body 
        const [student, _] = await Student.updateById(id);

        res.status(200).json({ student });
    } catch (error) {
        next(error);
    }
};

exports.getCountCourses = async (req, res, next) => {
    try {
        const courseCount = await Student.getCount();
        const totalCount = await Student.findAll();
        totalcount1 = totalCount[0].length;
        // only save the count of the course from the courseCount array
        const aitCount = courseCount[0][0].amount;
        const itnCount = courseCount[0][1].amount;
        const omcCount = courseCount[0][2].amount;
        const moCount = courseCount[0][3].amount;

        res.status(200).json({
            totalcount: totalcount1,
            AIT: aitCount,
            ITN: itnCount,
            OMC: omcCount,
            MO: moCount,
        });
    } catch (error) {
        next(error);
    }
};

exports.getStudentsByCourse = async (req, res, next) => {
    try {
        let course = req.query.course;

        const students = await Student.getStudentsByCourse(course);
        res.status(200).json(students);
    } catch (error) {
        next(error);
    }
}
