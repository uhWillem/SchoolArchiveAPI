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

exports.getStudentByID = async (req, res, next) => {
    try {
        let id = req.params.id;
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
        console.log(req.body);
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

exports.deleteStudentById = async (req, res, next) => {
    try {
        let id = req.params.id;
        const [student, _] = await Student.deleteById(id);

        res.status(200).json({ student });
    } catch (error) {
        next(error);
    }
};

exports.getCountRichtingen = async (req, res, next) => {
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

exports.getAITStudents = async (req, res, next) => {
    try {
        const [students, _] = await Student.findAllAIT();

        res.status(200).json({ count: students.length, students });
    } catch (error) {
        next(error);
    }
};

exports.getITNStudents = async (req, res, next) => {
    try {
        const [students, _] = await Student.findAllITN();

        res.status(200).json({ count: students.length, students });
    } catch (error) {
        next(error);
    }
};

exports.getOMCStudents = async (req, res, next) => {
    try {
        const [students, _] = await Student.findAllOMC();

        res.status(200).json({ count: students.length, students });
    } catch (error) {
        next(error);
    }
};

exports.getMOStudents = async (req, res, next) => {
    try {
        const [students, _] = await Student.findAllMO();

        res.status(200).json({ count: students.length, students });
    } catch (error) {
        next(error);
    }
};
