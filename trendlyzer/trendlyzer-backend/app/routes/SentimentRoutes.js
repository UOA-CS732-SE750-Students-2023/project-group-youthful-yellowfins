const express = require("express");
const router = express.Router();
const sentimentController = require("../controllers/SentimentController");
const checkIfAuthenticated = require( '../Middleware/AuthenticationService');


router.get("/GetSentimentAnalysis", checkIfAuthenticated,sentimentController.GetSentimentAnalysis);
router.get("/getTweets", checkIfAuthenticated,sentimentController.getTweets);

module.exports = router;
