const express = require('express');
const router = express.Router();

// Require controllers
const userController = require('../controllers/userController');

//homepage
router.get('/allusers', userController.users_page); // render page of all users

// All other routes

module.exports = router;