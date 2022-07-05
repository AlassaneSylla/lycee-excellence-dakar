const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');


const classesRoutes = require('./routes/classes.routes');
const userRoutes = require('./routes/user.routes');

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


app.use('/api/classes', classesRoutes);
app.use('/api/auth', userRoutes);






module.exports = app;