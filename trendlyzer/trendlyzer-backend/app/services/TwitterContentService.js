const Twitter = require('twitter-lite');
const URLs = require('../helper/URLs');
const { TwitterApi } = require('twitter-api-v2');
const axios = require('axios');

const consumerClient = new TwitterApi({ appKey: process.env.TWITTER_APPKEY, appSecret: process.env.TWITTER_SECRETKEY });


async function GetTweetsByKeywords(keyword,limit,isSentimentAnalysis) {
    let allTweets = [];
    const client = await consumerClient.appLogin();
    const query = {
        query: keyword+' -is:retweet',
        max_results: 10
    };
    const recentweetsSearch = await client.v2.search(query);
    console.log(recentweetsSearch);
    if(recentweetsSearch?.data?.data.length){
        recentweetsSearch.data.data.forEach((tweet) => {
            if (isSentimentAnalysis) {
                allTweets.push(tweet.text);
            } else {
                allTweets.push(tweet)
            }
        });
    }
    return allTweets;
}

module.exports = {
    GetTweetsByKeywords
};