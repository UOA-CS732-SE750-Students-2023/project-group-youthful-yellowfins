const express = require("express");
const router = express.Router();
const trendsController = require("../controllers/TrendsController");
/* Google Trends Route */
router.get('/getTrendsByDate', trendsController.getTrendsByDate);
router.post('/getTrendByRegion', trendsController.getTrendByRegion);

/* Chatgpt Route */
router.get('/getTrendingReasons', trendsController.sendMessage);

/* Country Codes Route */
router.get('/getCountryCodes', trendsController.getCountryCodes);
module.exports = router;
