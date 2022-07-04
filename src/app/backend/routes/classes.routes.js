const express = require('express');
const router = express.Router();

const Classes = require('../models/classes');


router.get('/', (req, res, next) => {
    Classes.find()
    .then(classes => res.status(200).json(classes))
    .catch(error => res.status(400).json({ error }));
 });
 
router.post('/', (req, res, next) => {
     const classe = new Classes({
         ...req.body
     });
     classe.save()
     .then(() => res.status(201).json({ message: 'Objet créé !' }))
     .catch(error => res.status(400).json({ error }));
 });
 
 router.get('/:id', (req, res, next) => {
     Classes.findOne({ _id: req.params.id })
     .then(classes => res.status(200).json(classes))
     .catch(error => res.status(404).json({ error }));
 })
 
 router.put("/:id", (req, res, next) => {
     Classes.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
     .then(() => res.status(200).json({ message: 'Objet modifié !' }))
     .catch(error => res.status(400).json({ error }));
 });
 
 router.delete('/:id', (req, res, next) => {
     Classes.deleteOne({ _id: req.params.id })
     .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
     .catch(error => res.status(400).json({ error }));
 });



module.exports = router;