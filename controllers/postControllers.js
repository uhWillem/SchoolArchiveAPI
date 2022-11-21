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

exports.getLeerlingByID = async (req, res, next) => {
    try {
        let id = req.params.id;
        const [leerling, _] = await Leerling.findById(id);

        res.status(200).json({ leerling });
    } catch (error) {
        next(error);
    }
};

exports.createNewLeerling = async (req, res, next) => {
    try {
        let {
            voornaam,
            achternaam,
            richting,
            geboortejaar,
            geslacht,
            email,
            telefoon,
            woonplaats,
            notitie,
        } = req.body;

        let leerling = new Leerling(
            voornaam,
            achternaam,
            richting,
            geboortejaar,
            geslacht,
            email,
            telefoon,
            woonplaats,
            notitie
        );

        leerling = await leerling.save();

        res.status(201).json({ message: "Leerling created" });
    } catch (error) {
        next(error);
    }
};

exports.deleteLeerlingById = async (req, res, next) => {
    try {
        let id = req.params.id;
        const [leerling, _] = await Leerling.deleteById(id);

        res.status(200).json({ leerling });
    } catch (error) {
        next(error);
    }
};

exports.getCountRichtingen = async (req, res, next) => {
    try {
        const richtingCount = await Leerling.getCount();
        const totalCount = await Leerling.findAll();
        totalcount1 = totalCount[0].length;
        // only save the count of the richting from the richtingCount array
        const aitCount = richtingCount[0][0].amount;
        const itnCount = richtingCount[0][1].amount;
        const omcCount = richtingCount[0][2].amount;
        const moCount = richtingCount[0][3].amount;

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
