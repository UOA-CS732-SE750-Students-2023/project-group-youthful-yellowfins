const axios = require('axios');
const nock = require('nock');
const ChatGPTService = require('../ChatgptService');

const URLs = require('../../helper/URLs');

describe('ChatGPTService', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  test('generateResponse should return background and trending reason', async () => {
    const message = 'xyz';

    const backgroundResponse = {
      choices: [
        {
          text: 'Can you give me some background information on xyz',
        },
      ],
    };

    const trendingReasonResponse = {
      choices: [
        {
          text: 'Why would xyz be trending?',
        },
      ],
    };

    nock(URLs.CHATGPT_API_URL, {
      reqheaders: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CHATGPT_API_KEY}`,
      },
    })
      .post('', {
        prompt: `Can you give me some background information on ${message}`,
        max_tokens: 4000,
        n: 1,
        stop: null,
        temperature: 0.5,
        top_p: 0.5,
      })
      .reply(200, backgroundResponse)
      .post('', {
        prompt: `Why would ${message} be trending?`,
        max_tokens: 4000,
        n: 1,
        stop: null,
        temperature: 0.5,
        top_p: 0.5,
      })
      .reply(200, trendingReasonResponse);

    const response = await ChatGPTService.generateResponse(message);

    expect(response.promptBackground).toEqual('Can you give me some background information on xyz');
    expect(response.promptTrendingReason).toEqual('Why would xyz be trending ');
  });

  test('generateResponse should throw an error with invalid API key', async () => {
    const originalApiKey = process.env.CHATGPT_API_KEY;
    process.env.CHATGPT_API_KEY = 'wrong_key';
  
    try {
      await ChatGPTService.generateResponse('xyz');
    } catch (error) {
      expect(error).toBeDefined();
      expect(error.response).toBeDefined();
      expect(error.response.status).toBe(401);
    } finally {
      process.env.CHATGPT_API_KEY = originalApiKey;
    }
  });

  
});