const Twitter = require('twitter-lite');
const URLs = require('../helper/URLs');
const user = new Twitter({
    consumer_key: "jv3Fu2nLLIgego7gGA1lsFqBP",
    consumer_secret: "8OHhvxUI3CCDz2vHkSzVeEhnDi7LZvA8BGSuDHU0nS02ncZwvn",
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
        console.log(response.statuses.length)

        for (tweet of response.statuses) {
            console.log(tweet.full_text)
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
        console.log(allTweets.length)

        return allTweets;

    } catch (e) {
        console.log("There was an error calling the Twitter API");
        console.dir(e);
    }
}

module.exports = {
    GetTweetsByKeywords
};