const express = require('express');
const router = express.Router();

// Require controllers
const userController = require('../controllers/userController');

// SHOW ALL
router.get('/allusers', userController.users_page); // render page of all users
// CREATE
router.get('/user/create', userController.user_create_get); // redirect to user create form
router.post('/user/create', userController.user_create_post);
// READ
router.get('/user/:id', userController.user_read);
// UPDATE
router.post('/user/:id', userController.user_update);
// DESTROY
router.get('/user/:id/delete', userController.user_destroy_get); // redirect to delete page, asking to confirm deletion
router.post('/user/:id/delete', userController.user_destroy_post); // process delete.js submit button

// Post Routes

module.exports = router;