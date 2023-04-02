const { Configuration, OpenAIApi } = require("openai");
// require('dotenv').config()

const configuration = new Configuration({
//   apiKey: "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",

    apiKey: "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",
//   apiKey: process.env.OPENAI_API_KEY

  completionParams: {
    temperature: 1,   // Default to 1 ---  What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
    max_tokens: 16, // Defaults to 16
      // The maximum number of tokens to generate in the completion. 
    // The token count of your prompt plus max_tokens cannot exceed the model's context length. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
  }
});
const openai = new OpenAIApi(configuration);

async function runCompletion () {
const completion = await openai.createChatCompletion({
model: "gpt-3.5-turbo-0301",  // There are different models to use
  messages: [{role: 'user', content: `Why is prince harry trending?`}]
});
console.log(completion.data.choices[0].message);
}

runCompletion();
