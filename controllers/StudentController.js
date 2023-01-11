// without [students, _] the _ you get a ton of useless data in the response, now this

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

exports.getStudentsByCourse = async (req, res, next) => {
    try {
        let course = req.query.course;

        const [students, _] = await Student.getStudentsByCourse(course);

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
            note
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
            note
        );

        student = await student.update(id);

        res.status(200).json({
            message: "Successfully update student",
            student: student,
        });

    } catch (error) {
        next(error);
    }
};

exports.deleteStudentById = async (req, res, next) => {
    try {
        let id = req.params.id;
        const [student, _] = await Student.deleteById(id);

        res.status(200).json({ message: "Student deleted" });
    } catch (error) {
        next(error);
    }
};


exports.getCountCourses = async (req, res, next) => {
    try {
        const courseCount = await Student.getCount();
        const totalCount = await Student.findAll();
        const totalcount1 = totalCount[0].length;

        // Prevent TypeError by setting count variables to 0 when courseCount[0][x].amount is undefined
        // this can occur if there are no students in that specific course yet

        let aitCount = 0;
        let itnCount = 0;
        let omcCount = 0;
        let moCount = 0;
        let other = 0;
        for (const [index, count] of courseCount[0].entries()) {
            switch (count.course) {
                case "AIT":
                    aitCount = courseCount[0][index].amount;
                    break;
                case "ITN":
                    itnCount = courseCount[0][index].amount;
                    break;
                case "OMC":
                    omcCount = courseCount[0][index].amount;
                    break;
                case "MO":
                    moCount = courseCount[0][index].amount;
                    break;
                default:
                    other += courseCount[0][index].amount;
                    break;

            }
        }

        res.status(200).json({
            totalcount: totalcount1,
            AIT: aitCount,
            ITN: itnCount,
            OMC: omcCount,
            MO: moCount,
            Other: other,
        });
    } catch (error) {
        next(error);
    }
};


