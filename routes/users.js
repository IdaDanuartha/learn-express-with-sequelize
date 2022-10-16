const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')

// GET users listing.
router.get('/', UserController.all);

// GET users by id
router.get('/:id', UserController.detail);

// POST users
router.post('/', UserController.store);

// UPDATE users
router.patch('/:id', UserController.update);

// DELETE users
router.delete('/:id', UserController.delete);

module.exports = router;
