const express = require('express');
const router = express.Router();

const classesControllers = require('../controllers/classes.controllers');

const auth = require('../middleware/auth');

router.get('/', auth, classesControllers.getAllClasses); 
router.post('/', auth, classesControllers.createClass);
router.get('/:id', auth, classesControllers.getOneClass);
router.put("/:id", auth, classesControllers.modifyClass);
router.delete('/:id', auth, classesControllers.deleteClass);

module.exports = router;