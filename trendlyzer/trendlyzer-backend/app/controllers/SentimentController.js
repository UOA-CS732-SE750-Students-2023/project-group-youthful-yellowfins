/**
 * Author:  Shubham Gujare
 * Created: 17.04.2023
 * Purpose: This controller contains all the APIs related to sentiment analysis module
 **/

const TwitterService = require("../services/TwitterContentService");
const Constants = require("../helper/Constants");
const SentimentAnalysisService = require("../services/SentimentService");
var ApiException = require('././../models/Error');


/**
 * Author:  Shubham Gujare
 * Created: 01.04.2023
 * Purpose: This method takes tweet limit and tweet keyword and returns response of all the tweets.
 **/

exports.getTweets = async (req, res) => {
  try {
    if (!req.query?.keyword) {
      throw new ApiException(Constants.SEARCH_KEYWORD_MISSING_ERROR_MESSAGE,
        Constants.BAD_REQUEST_ERROR_CODE);
    }
    let limit = 10;
    if (req.query?.limit) {
      limit = req.query.limit
    }
    const tweets = await TwitterService.GetTweetsByKeywords(req.query.keyword, req.query.limit, false);
    res.json({ message: 'Success', status: true, result: tweets });
  } catch (err) {
    if (err instanceof ApiException) {
      res.status(err.statusCode).json({ message: err.message, status: false });
    } else {
      res.status(Constants.INTERNAL_SERVER_ERROR_CODE).json({ message: err.message, status: false });
    }
  }
}



/**
 * Author:  Shubham Gujare
 * Created: 17.04.2023
 * Purpose: This method takes tweet limit and  keyword and returns response of sentiment statistics.
 **/

  exports.GetSentimentAnalysis = async (req, res) => {
    try {
      if (!req.query?.keyword) {
        throw new ApiException(Constants.SEARCH_KEYWORD_MISSING_ERROR_MESSAGE,
          Constants.BAD_REQUEST_ERROR_CODE);
      }
      let limit = 500;
      let response = null;
      if (req.query?.limit) {
        limit = req.query?.limit
      }
      const tweets = await TwitterService.GetTweetsByKeywords(req.query.keyword, limit, true);
      if (tweets) {
        response = await SentimentAnalysisService.getSentimentStats(tweets);
      } else {
        throw new ApiException('No tweets found, something went wrong',
          1001);
      }
      if (response) {
        res.json({ status: true, message: 'success', result: response });
      } else {
        res.json({ status: false, message: 'ndfknkdjnfkjd', result: null });
      }
    } catch (err) {
      if (err instanceof ApiException) {
        res.status(err.statusCode).json({ message: err.message, status: false });
      } else {
        res.status(Constants.INTERNAL_SERVER_ERROR_CODE).json({ message: err.message, status: false });
      }
    }
  }