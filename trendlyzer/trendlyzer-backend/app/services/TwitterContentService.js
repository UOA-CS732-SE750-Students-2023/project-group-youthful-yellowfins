const Twitter = require('twitter-lite');
const URLs = require('../helper/URLs');
const user = new Twitter({
    consumer_key: "mLm51PhVD1pDuZVeu8Oqe5EjK",
    consumer_secret: "6inmSuQEC5zkHLT1yhWZxv8QvfuCjjfpUjWKMRVjFj5qReYKBQ",
});


async function GetTweetsByKeywords(keyword,limit,isSentimentAnalysis) {
    try {
        let response = await user.getBearerToken();
        const app = new Twitter({
            bearer_token: response.access_token,
        });
        response = await app.get(URLs.GET_TWEETS_BY_KEYWORD, {
            q: keyword,
            lang: "en",
            max_results: limit,
            tweet_mode: 'extended',
            filter:'retweets'
        });
        let allTweets = [];

        for (tweet of response.statuses) {
            if (isSentimentAnalysis){
                if(tweet?.retweeted_status && !allTweets.includes(tweet?.retweeted_status.full_text)){
                    allTweets.push(tweet.retweeted_status.full_text.trim());
                } else if(!allTweets.includes(tweet.full_text)) {
                    allTweets.push(tweet.full_text.trim());
                }
            } else {
                allTweets.push(tweet)
            }
        }

        return allTweets;

    } catch (e) {
        console.log("There was an error calling the Twitter API");
        console.dir(e);
    }
}

module.exports = {
    GetTweetsByKeywords
};