const express = require('express');
const router = express.Router();
const { getUserProfile, updateUserProfile } = require('../controllers/userController');

router.get('/:id', getUserProfile);
router.patch('/:id', updateUserProfile);

module.exports = router;
