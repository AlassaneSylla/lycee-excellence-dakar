const express = require('express');
const router = express.Router();

const classesControllers = require('../controllers/classes.controllers');

const auth = require('../middleware/auth');

router.get('/', classesControllers.getAllClasses); 
router.post('/',  classesControllers.createClass);
router.get('/:id',  classesControllers.getOneClass);
router.put("/:id", classesControllers.modifyClass);
router.delete('/:id', classesControllers.deleteClass);

module.exports = router;