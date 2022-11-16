const Leerling = require('../models/Post');

exports.getAllLeerlingen = async (req, res, next) => {
    try {
        const [leerlingen, _] = await Leerling.findAll();

        res.status(200).json({ count: leerlingen.length, leerlingen });
    } catch (error) {
        next(error);
    }
};

exports.getAITLeerlingen = async (req, res, next) => {
    try {
        const [leerlingen, _] = await Leerling.findAllAIT();

        res.status(200).json({ count: leerlingen.length, leerlingen });
    } catch (error) {
        next(error);
    }
};



exports.createNewLeerling = async (req, res, next) => {

    // haalt voornaam & achternaam data uit de post request
    let { voornaam, achternaam } = req.body;
    let leerling = new Leerling(voornaam, achternaam)

    leerling = await Leerling.save();

    console.log(leerling);

    res.send("Create new leerlingen");
};

exports.getLeerlingByID = (req, res, next) => {
    res.send("Leerling by id");
};
