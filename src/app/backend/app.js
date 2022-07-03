const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

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



app.get('/api/class', (req, res, next) => {
    const classes = [
        {
         _id: 'oeihfzeoi',
         libelle: 'Terminale',
         effectif: 32,
         userId: 'qsomihvqios',
        } ,
        {
         _id: 'oeihfzeoialou',
         libelle: 'Seconde',
         effectif: 33,
         userId: 'qsomihvqios',
        },
     ];
     res.status(200).json(classes);
});

app.post('/api/class', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({ message: 'Objet créé !'});
});



module.exports = app;