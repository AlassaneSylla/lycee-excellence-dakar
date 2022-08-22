const express = require('express');
const router = express.Router();

const classesControllers = require('../controllers/classes.controllers');

//const auth = require('../middleware/auth'); //puis o ajoute auth apres chaque virgule

router.get('/', classesControllers.getAllClasses); 
router.post('/',  classesControllers.createClass);
router.get('/:id',  classesControllers.getOneClass);
router.put("/:id", classesControllers.modifyClass);
router.delete('/:id', classesControllers.deleteClass);

module.exports = router;