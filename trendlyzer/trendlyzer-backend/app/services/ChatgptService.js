const axios = require('axios');
const URLs = require('../helper/URLs');

const CHATGPT_API_KEY = process.env.CHATGPT_API_KEY;

async function generateResponse(message) {
  const prompt1 = `Can you give me some background information on ${message}`;
  const prompt2 = `Why would ${message} be trending?`;

  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${CHATGPT_API_KEY}`,
    },
  };

  const promptBackground = await axios.post( URLs.CHATGPT_API_URL,
    {
      prompt: prompt1,
      max_tokens: 4000,
      n: 1,
      stop: null,
      temperature: 0.5,
      top_p: 0.5,
    },
    requestOptions
  );

  const promptTrendingReason = await axios.post(
    URLs.CHATGPT_API_URL,
    {
      prompt: prompt2,
      max_tokens: 4000,
      n: 1,
      stop: null,
      temperature: 0.5,
      top_p: 0.5,
    },
    requestOptions
  );

  
  let result = {
    promptBackground: "",
    promptTrendingReason:""
  }
    if(promptBackground?.data?.choices?.length && promptTrendingReason?.data?.choices?.length){
      result.promptBackground = promptBackground.data.choices[0]?.text?.trim()
      result.promptTrendingReason = promptTrendingReason.data.choices[0]?.text?.trim()
      result.promptBackground = result.promptBackground.replace('\?', ' ');
      result.promptTrendingReason = result.promptTrendingReason.replace('\?', ' ');
    }
    return result;

}

module.exports = {
  generateResponse,
};