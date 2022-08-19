const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

const auth = require('../middleware/auth');

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/user', userController.getAllUsers);
router.get('/user/:id', userController.getUser);
router.put('/user/:id', userController.editUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;