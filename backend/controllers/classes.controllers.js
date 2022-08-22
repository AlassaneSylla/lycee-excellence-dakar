const Classes = require('../models/classes');


exports.getAllClasses = (req, res, next) => {
    console.log("liste classes");
    Classes.find()
    .then(classes => res.status(200).json(classes))
    .catch(error => res.status(400).json({ error }));
};

exports.getOneClass = (req, res, next) => {
    Classes.findOne({ _id: req.params.id })
    .then(classes => res.status(200).json(classes))
    .catch(error => res.status(404).json({ error }));
};

exports.createClass = (req, res, next) => {
    console.log('testclass');
    const classe = { ...req.body };
    Classes.create(classe)
    .then(() => res.status(201).json({ message: 'Objet créé !' }))
    .catch(error => res.status(400).json({ error }));
};

exports.modifyClass = (req, res, next) => {
    Classes.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !' }))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteClass = (req, res, next) => {
    Classes.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
    .catch(error => res.status(400).json({ error }));
};

