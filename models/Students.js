// Code for the 'Leerling' class
// This class is used to represent the 'Leerlingen' table in the database
// The constructor takes the voornaam and achternaam of a student and saves it to the database
// The 'save' method is used to save the student to the database

const db = require("../config/db");

class Student {
    constructor(
        first_name,
        last_name,
        course,
        birthyear,
        sex,
        email,
        phone_number,
        city,
        note
    ) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.course = course;
        this.birthyear = birthyear;
        this.sex = sex;
        this.email = email;
        this.phone_number = phone_number;
        this.city = city;
        this.note = note;
    }

    save() {
        let d = new Date();
        let yyyy = d.getFullYear();
        // maanden beginnen bij 0 dus + 1 (zeroindex)
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        let createdAtDate = `${yyyy}-${mm}-${dd}`;

        let sql = `
        INSERT INTO student(
           first_name,
           last_name,
           course,
           birthyear,
           sex,
           email,
           phone_number,
           city,
           note,
           created_at
        )
        VALUES(
            '${this.first_name}',
            '${this.last_name}',
            '${this.course}',
            '${this.birthyear}',
            '${this.sex}',
            '${this.email}',
            '${this.phone_number}',
            '${this.city}',
            '${this.note}',
            '${createdAtDate}'
        );
        `;

        return db.execute(sql);
    }

    static findAll() {
        let sql = `SELECT * FROM student;`;
        return db.execute(sql);
    }

    static findStudentsByCourse(course) {
        let sql = `SELECT * FROM student WHERE course = '${course}';`;
        return db.execute(sql);
    }

    static findById(id) {
        let sql = `SELECT * FROM student WHERE student_id = ${id};`;
        return db.execute(sql);
    }

    static deleteById(id) {
        let sql = `DELETE FROM student WHERE student_id = ${id};`;
        return db.execute(sql);
    }

    static updateById(
        id,
        first_name,
        last_name,
        course,
        sex,
        email,
        phone_number,
        city,
        note
    ) {
        let sql = `
        UPDATE student
        SET first_name = '${first_name}',
            last_name = '${last_name}',
            course = '${course}',
            sex = '${sex}', 
            email = '${email}',
            phone_number = '${phone_number}',
            city = '${city}',
            note = '${note}'
        WHERE student_id = ${id};
        `;
        return db.execute(sql);
    }

    static getStudentsByCourse(course) {
        let sql = `SELECT * from student WHERE course = '${course}'; `;
        return db.execute(sql);
    }

    static getCount() {
        let sql = `
            SELECT course, COUNT(*) AS amount
            FROM student
            GROUP BY course
            `;

        return db.execute(sql);
    }
}

module.exports = Student;
