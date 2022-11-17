const Leerling = require("../models/Post");

exports.getAllLeerlingen = async (req, res, next) => {
    try {
        const [leerlingen, _] = await Leerling.findAll();

        res.status(200).json({
            totalcount: leerlingen.length,
            leerlingen,
        });
    } catch (error) {
        next(error);
    }
};

exports.getCountRichtingen = async (req, res, next) => {
    try {
        const richtingCount = await Leerling.getCount();
        // only save the count of the richting from the richtingCount array
        const aitCount = richtingCount[0][0].amount;
        const itnCount = richtingCount[0][1].amount;
        const omcCount = richtingCount[0][2].amount;
        const moCount = richtingCount[0][3].amount;

        res.status(200).json({
            AIT: aitCount,
            ITN: itnCount,
            OMC: omcCount,
            MO: moCount,
        });
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

exports.getITNLeerlingen = async (req, res, next) => {
    try {
        const [leerlingen, _] = await Leerling.findAllITN();

        res.status(200).json({ count: leerlingen.length, leerlingen });
    } catch (error) {
        next(error);
    }
};

exports.getOMCLeerlingen = async (req, res, next) => {
    try {
        const [leerlingen, _] = await Leerling.findAllOMC();

        res.status(200).json({ count: leerlingen.length, leerlingen });
    } catch (error) {
        next(error);
    }
};

exports.getMOLeerlingen = async (req, res, next) => {
    try {
        const [leerlingen, _] = await Leerling.findAllMO();

        res.status(200).json({ count: leerlingen.length, leerlingen });
    } catch (error) {
        next(error);
    }
};

exports.createNewLeerling = async (req, res, next) => {
    // haalt voornaam & achternaam data uit de post request
    let { voornaam, achternaam } = req.body;
    let leerling = new Leerling(voornaam, achternaam);

    leerling = await Leerling.save();

    console.log(leerling);

    res.send("Create new leerlingen");
};

exports.getLeerlingByID = (req, res, next) => {
    res.send("Leerling by id");
};
