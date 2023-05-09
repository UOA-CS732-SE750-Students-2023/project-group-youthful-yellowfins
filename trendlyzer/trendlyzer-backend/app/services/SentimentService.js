/**
 * Author:  Shubham Gujare
 * Created: 17.04.2023
 * Purpose: This function gets tweets regarding requested keyword, cleans tweets and calls google nlp and 
 * performs sentiment analysis calculations.
 **/

const express = require('express');
const aposToLexForm = require('apos-to-lex-form');
const SpellCorrector = require('spelling-corrector');
const natural = require('natural');
const SW = require('stopword');
const spellCorrector = new SpellCorrector();
spellCorrector.loadDictionary();
var ml = require('ml-sentiment')();
const { htmlToText } = require("html-to-text");
const language = require('@google-cloud/language');

// Instantiates a client
const client = new language.LanguageServiceClient();
const ignoreWords = ['\\brt\\b','\\bfor\\b', '\\bon\\b', '\\ban\\b', '\\ba\\b'
, '\\bof\\b', '\\band\\b', '\\bin\\b', '\\bthe\\b', '\\bto\\b', '\\bfrom\\b']
const ignoreWordRegex = new RegExp(ignoreWords.join("|"), "gi");



async function getSentimentStats(tweets) {
  let response = {
    positiveSentiments : 0,
    positiveTweets : [],
    negativeTweets : [],
    negativeSentiments : 0,
    neutralTweets : [],
    neutralSentiments : 0,
    postiveSentimentMagnitude : 0,
    negativeSentimentMagnitude : 0,
    totalTweetsAnalysed : tweets.length
  }
  let sentimentScore = 0;
  let postiveSentimentMagnitude = 0;
  let negativeSentimentMagnitude = 0;
  for (let tweet of tweets) {
    let text = cleanTweetText(tweet);
    // console.log(tweets)
      const document = {
        content: text,
        type: 'PLAIN_TEXT',
      };
      // Detects the sentiment of the text
      const [result] = await client.analyzeSentiment({document: document});
      const sentiment = result.documentSentiment;
      sentimentScore = sentiment.score;
     
      // console.log(`Text: ${text}`);
      // console.log(`Sentiment score: ${sentiment.score}`);
      // console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
      // sentimentScore = ml.classify(text);
    if(sentimentScore > 0){
      response.positiveSentiments++;
      response.positiveTweets.push(tweet);
      postiveSentimentMagnitude +=  sentiment.magnitude
    } else if(sentimentScore < 0){
      response.negativeSentiments++;
      response.negativeTweets.push(tweet);
      negativeSentimentMagnitude +=  sentiment.magnitude
    } else {
      response.neutralSentiments++;
      response.neutralTweets.push(tweet)
    }
  }
  if(postiveSentimentMagnitude){
    response.postiveSentimentMagnitude = postiveSentimentMagnitude/response.positiveSentiments;
  }
  if(negativeSentimentMagnitude){
    response.negativeSentimentMagnitude = negativeSentimentMagnitude/response.negativeSentiments
  }
  return response;
}


function cleanTweetText(req) {
  let text = req.toLowerCase(); // transform to lowercase
  text = htmlToText(text, {
    wordwrap: 600
  });
  text = text.replace(/(#|@)[A-Za-z0-9_]+/g, ' '); // transform to remove mentions @
  text = text.replace(/(http|www.)\S+/g, ' '); // transform to remove urls
  text = text.replace(/[^a-zA-Z]/g, ' ', text); // transform to remove hastags character
  text = text.replace(ignoreWordRegex, ' ');
  text = text.replace(/\s{2,20}/, ' '); // transform to remove more than 2 whitspaces
  return text;
}



module.exports = {
  getSentimentStats
};

  // const lexedReview = aposToLexForm(req);
  // const casedReview = lexedReview.toLowerCase();
  // const alphaOnlyReview = casedReview.replace(/[^a-zA-Z\s]+/g, '');

  // const { WordTokenizer } = natural;
  // const tokenizer = new WordTokenizer();
  // const tokenizedReview = tokenizer.tokenize(alphaOnlyReview);

  // tokenizedReview.forEach((word, index) => {
  //   tokenizedReview[index] = spellCorrector.correct(word);
  // })
  // const filteredReview = SW.removeStopwords(tokenizedReview);
  // console.log(filteredReview)
  // const { SentimentAnalyzer, PorterStemmer } = natural;
  // const analyzer = new SentimentAnalyzer('English', PorterStemmer, 'afinn');
  // const analysis = analyzer.getSentiment(filteredReview);