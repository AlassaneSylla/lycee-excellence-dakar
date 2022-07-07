const Students = require('../models/Students');


exports.getAllStudents = (req, res, next) => {
    Students.find()
    .then(student => res.status(200).json(student))
    .catch(error => res.status(400).json({ error }));
};

exports.getOneStudent = (req, res, next) => {
    Students.findOne({ _id: req.params.id })
    .then(student => res.status(200).json(student))
    .catch(error => res.status(404).json({ error }));
};

exports.registerStudent = (req, res, next) => {
    const student = new Students({
        ...req.body
    });
    student.save()
    .then(() => res.status(201).json({ message: 'Iscription réussie !' }))
    .catch(error => res.status(400).json({ error }));
};

exports.editStudentData = (req, res, next) => {
    Students.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Donnée(s) étudiant modifiée(s) !' }))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteStudent = (req, res, next) => {
    Students.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'L\'etudiant n\'est plus dans la BD !' }))
    .catch(error => res.status(400).json({ error }));
};

