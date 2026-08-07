const express = require('express');
const router = express.Router();

// Import the user controller
const userController = require('../Controllers/UserController');

//define routes for user operations
router.post('/createuser', userController.createUser);
router.post('/login', userController.loginUser);

//export the router
module.exports = router;