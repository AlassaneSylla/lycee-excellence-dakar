const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const classes = require('./models/classes');
const Classes = require('./models/classes');

const { NODE_ENV, URL_DB } = process.env;

const app = express();
app.use(express.json());

mongoose.connect(process.env.URL_DB, 
{ useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

/**
 * CORS: ajout headers
 * acces API depuis n'importe quelle origne
 */
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Acces-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATH, OPTIONS');
    next();
});



app.get('/api/classes', (req, res, next) => {
   Classes.find()
   .then(classes => res.status(200).json(classes))
   .catch(error => res.status(400).json({ error }));
});

app.post('/api/classes', (req, res, next) => {
    const classe = new Classes({
        ...req.body
    });
    classe.save()
    .then(() => res.status(201).json({ message: 'Objet créé !' }))
    .catch(error => res.status(400).json({ error }));
});

app.get('/api/classes/:id', (req, res, next) => {
    Classes.findOne({ _id: req.params.id })
    .then(classes => res.status(200).json(classes))
    .catch(error => res.status(404).json({ error }));
})

app.put("/api/classes/:id", (req, res, next) => {
    Classes.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !' }))
    .catch(error => res.status(400).json({ error }));
});

app.delete('/api/classes/:id', (req, res, next) => {
    Classes.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
    .catch(error => res.status(400).json({ error }));
});



module.exports = app;