const axios = require('axios');

const CHATGPT_API_KEY = process.env.CHATGPT_API_KEY;
const CHATGPT_API_URL = 'https://api.openai.com/v1/engines/text-davinci-003/completions';

async function generateResponse(message) {
  const prompt1 = `Can you give me some background information on ${message}`;
  const prompt2 = `Why would ${message} be trending?`;

  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${CHATGPT_API_KEY}`,
    },
  };

  const promptBackground = await axios.post(
    CHATGPT_API_URL,
    {
      prompt: prompt1,
      max_tokens: 4000,
      n: 1,
      stop: null,
      temperature: 0.5,
      top_p: 0.5,
      presence_penalty: 2.0,
    },
    requestOptions
  );

  const promptTrendingReason = await axios.post(
    CHATGPT_API_URL,
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

  console.log('Response 1:', promptBackground.data);
  console.log('Response 2:', promptTrendingReason.data);

  
  let result = {
    promptBackground: "",
    promptTrendingReason:""
  }
    if(promptBackground?.data?.choices?.length && promptTrendingReason?.data?.choices?.length){
      result.promptBackground = promptBackground.data.choices[0]?.text?.trim()
      result.promptTrendingReason = promptTrendingReason.data.choices[0]?.text?.trim()
    }
    return result;

}

module.exports = {
  generateResponse,
};