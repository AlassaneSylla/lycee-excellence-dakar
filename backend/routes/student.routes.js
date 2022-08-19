const express = require('express');
const router = express.Router();

const studentsControllers = require('../controllers/student.controller');

const auth = require('../middleware/auth');

router.get('/', auth, studentsControllers.getAllStudents); 
router.post('/', auth, studentsControllers.registerStudent);
router.get('/:id', auth, studentsControllers.getOneStudent);
router.put("/:id", auth, studentsControllers.editStudentData);
router.delete('/:id', auth, studentsControllers.deleteStudent);

module.exports = router;