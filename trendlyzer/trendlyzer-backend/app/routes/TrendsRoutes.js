const express = require("express");
const router = express.Router();
const trendsController = require("../controllers/TrendsController");

router.get("/getTweets/:keyword", trendsController.getTweets);
router.get('/getTrendsByDate', trendsController.getTrendsByDate);
router.post('/getTrendByRegion', trendsController.getTrendByRegion);


router.get('/getTrendingReasons', trendsController.sendMessage);

module.exports = router;
