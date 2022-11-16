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

    async save() {
        let d = new Date();
        let yyyy = d.getFullYear();
        // maanden beginnen bij 0 dus + 1 (zeroindex)
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        let createdAtDate = `${yyyy}-${mm}-${dd}`;

        let sql = `
        INSERT INTO Leerlingen(
           voornaam
           achternaam
           created_at
        )
        VALUES(
            '${this.naam}',
            '${this.achternaam}',
            '${createdAtDate}'
        )
        `;

        // maakt een nieuwe variable "newLeerling" en geeft het het de eerste waarde die de execute methode terug geeft.
        // the first variable is the result of the query, the second variable is an empty array
        // the result of the second parameter of the execute method, which is an empty array by default
        const [newLeerling, _] = await db.execute(sql);

        return newLeerling;
    }

    static findAll() {
        let sql = "SELECT * FROM Leerling;";
        return db.execute(sql);
    }

    static findAllAIT() {
        let sql = "SELECT * FROM Leerling WHERE richting = 'AIT';";
        return db.execute(sql);
    }
}

module.exports = Leerling;
