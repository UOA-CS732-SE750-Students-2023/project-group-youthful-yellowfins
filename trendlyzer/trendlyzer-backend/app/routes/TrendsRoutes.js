const express = require("express");
const router = express.Router();
const trendsController = require("../controllers/TrendsController");
const checkIfAuthenticated = require( '../Middleware/AuthenticationService');

/* Google Trends Route */
router.get('/getTrendsByDate', checkIfAuthenticated,trendsController.getTrendsByDate);
router.post('/getTrendByRegion',checkIfAuthenticated, trendsController.getTrendByRegion);

/* Chatgpt Route */
router.get('/getTrendingReasons',checkIfAuthenticated, trendsController.sendMessage);

/* Country Codes Route */
router.get('/getCountryCodes', checkIfAuthenticated,trendsController.getCountryCodes);
module.exports = router;
