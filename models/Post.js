// Code for the 'Leerling' class
// This class is used to represent the 'Leerlingen' table in the database
// The constructor takes the voornaam and achternaam of a student and saves it to the database
// The 'save' method is used to save the student to the database

const db = require("../config/db");

class Leerling {
    constructor(naam, achternaam) {
        this.naam = naam;
        this.achternaam = achternaam;
    }

    save() {
        let d = new Date();
        let yyyy = d.getFullYear();
        // maanden beginnen bij 0 dus + 1 (zeroindex)
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        let createdAtDate = `${yyyy}-${mm}-${dd}`;

        let sql = `
        INSERT INTO Leerling(
           voornaam,
           achternaam,
           created_at
        )
        VALUES(
            '${this.naam}',
            '${this.achternaam}',
            '${createdAtDate}'
        )
        `;

        return db.execute(sql);
    }

    static findAll() {
        let sql = `SELECT * FROM Leerling;`;
        return db.execute(sql);
    }

    static findAllAIT() {
        let sql = "SELECT * FROM Leerling WHERE richting = 'AIT';";
        return db.execute(sql);
    }

    static findAllITN() {
        let sql = "SELECT * FROM Leerling WHERE richting = 'ITN';";
        return db.execute(sql);
    }

    static findAllOMC() {
        let sql = "SELECT * FROM Leerling WHERE richting = 'OMC';";
        return db.execute(sql);
    }

    static findAllMO() {
        let sql = "SELECT * FROM Leerling WHERE richting = 'MO';";
        return db.execute(sql);
    }

    static findById(id) {
        let sql = `SELECT * FROM Leerling WHERE leerling_id = ${id};`;
        return db.execute(sql);
    }

    static deleteById(id) {
        let sql = `DELETE FROM Leerling WHERE leerling_id = ${id};`;
        return db.execute(sql);
    }

    static getCount() {
        let sql = `
            SELECT richting, COUNT(*) AS amount
            FROM Leerling
            GROUP BY richting
            `;

        return db.execute(sql);
    }
}

module.exports = Leerling;
