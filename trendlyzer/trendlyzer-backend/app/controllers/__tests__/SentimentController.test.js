const request = require('supertest');
const nock = require('nock');
const express = require('express');
const SentimentController = require('../SentimentController');
const SentimentService = require('../../services/SentimentService');
const Constants = require('../../helper/Constants');

const app = express();
app.use(express.json());
app.get('/getTweets', SentimentController.getTweets);
app.get('/getSentimentAnalysis', SentimentController.GetSentimentAnalysis);



describe('SentimentController', () => {
  describe('getTweets', () => {
    test('should return tweets when provided with a keyword', async () => {
      const response = await request(app).get('/getTweets').query({ keyword: 'sample' });

      expect(response.status).toBe(200);
      expect(response.body.status).toBe(true);
    });

    test('should return an error when the keyword is missing', async () => {
      const response = await request(app).get('/getTweets');

      expect(response.status).toBe(Constants.BAD_REQUEST_ERROR_CODE);
      expect(response.body.status).toBe(false);
      expect(response.body.message).toBe(Constants.SEARCH_KEYWORD_MISSING_ERROR_MESSAGE);
    });
  });
});


describe('GetSentimentAnalysis', () => {
  describe('getSentimentAnalysis', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  
    test('should return an error when the keyword is missing', async () => {
      const response = await request(app).get('/getSentimentAnalysis');
  
      expect(response.status).toBe(Constants.BAD_REQUEST_ERROR_CODE);
      expect(response.body.status).toBe(false);
      expect(response.body.message).toBe(Constants.SEARCH_KEYWORD_MISSING_ERROR_MESSAGE);
    });

    test('should return sentiment stats for given tweets', async () => {
      const tweets = [
        { text: 'I love this product! It is amazing.' },
        { text: 'This is the worst thing I have ever bought.' },
      ];
    
      const sentimentStats = await SentimentService.getSentimentStats(tweets);
    
      expect(sentimentStats).toHaveProperty('positive');
      expect(sentimentStats).toHaveProperty('negative');
      expect(sentimentStats).toHaveProperty('neutral');
      expect(sentimentStats).toHaveProperty('total');
    });
    
    test('should return all neutral sentiment stats when no tweets are provided', async () => {
      const tweets = [];
    
      const sentimentStats = await SentimentService.getSentimentStats(tweets);
    
      expect(sentimentStats.positive).toBe(0);
      expect(sentimentStats.negative).toBe(0);
      expect(sentimentStats.neutral).toBe(0);
      expect(sentimentStats.total).toBe(0);
    });
    
    test('should return correct sentiment stats for multiple tweets with different sentiments', async () => {
      const tweets = [
        { text: 'I love this product! It is amazing.' },
        { text: 'This is the worst thing I have ever bought.' },
        { text: 'I am not sure if I like this or not.' },
      ];
    
      const sentimentStats = await SentimentService.getSentimentStats(tweets);
    
      expect(sentimentStats.positive).toBeGreaterThan(0);
      expect(sentimentStats.negative).toBeGreaterThan(0);
      expect(sentimentStats.neutral).toBeGreaterThan(0);
      expect(sentimentStats.total).toBe(tweets.length);
    });
  })
  
});
