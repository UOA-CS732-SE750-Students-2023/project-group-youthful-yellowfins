const axios = require('axios');

const CHATGPT_API_KEY = process.env.CHATGPT_API_KEY; 
const CHATGPT_API_URL ='https://api.openai.com/v1/completions';
async function generateResponse(message) {
  const prompt = `User: ${message}\nChatbot:`;

  console.log("Hello");
  const response = await axios.post(
    CHATGPT_API_URL,
    {
      prompt,
      max_tokens: 50,
      n: 1,
      stop: null,
      temperature: 0.5,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${CHATGPT_API_KEY}`,
      },
    }
  );

  console.log(response.data);
  return response.data.choices[0].text.trim();
}

module.exports = {
  generateResponse,
};