const express = require('express');
const router = express.Router();
const chatgptController = require('../controllers/ChatgptController');

router.post('/chat', chatgptController.sendMessage);

module.exports = router;