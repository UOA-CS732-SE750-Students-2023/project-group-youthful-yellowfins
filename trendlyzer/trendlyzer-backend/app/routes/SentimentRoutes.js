const express = require("express");
const router = express.Router();
const sentimentController = require("../controllers/SentimentController");

router.get("/GetSentimentAnalysis", sentimentController.GetSentimentAnalysis);
router.get("/getTweets", sentimentController.getTweets);

module.exports = router;
