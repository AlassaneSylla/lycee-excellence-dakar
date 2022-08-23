const express = require('express');
const router = express.Router();

const studentsControllers = require('../controllers/student.controller');

//const auth = require('../middleware/auth'); //ajouter auth

router.get('/', studentsControllers.getAllStudents); 
router.post('/', studentsControllers.registerStudent);
router.get('/:id', studentsControllers.getOneStudent);
router.put("/:id", studentsControllers.editStudentData);
router.delete('/:id', studentsControllers.deleteStudent);

module.exports = router;