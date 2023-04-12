const Twitter = require('twitter-lite');
const URLs = require('../helper/URLs');
const user = new Twitter({
    consumer_key: "Xwjtm4EA5HnmJw84vUME5LBMB",
    consumer_secret: "645OutrwashtTed7joXGEZko6MBRV3LGnBmaGsXJyDRMbJQkvj",
});

module.exports = {
    GetTweetsByKeywords : async (query)=> {
        try {
            let response = await user.getBearerToken();
            const app = new Twitter({
                bearer_token: response.access_token,
            });
    
            response = await app.get(URLs.GET_TWEETS_BY_KEYWORD, {
                q: query,
                lang: "en",
                count: 2,
                tweet_mode : 'extended'
            });
    
            let allTweets = "";
            for (tweet of response.statuses) {
                console.log(tweet.full_text);
                //allTweets += tweet.text + "\n";
            }
    
            // const sentimentScore = await getSentimentScore(allTweets);
            // console.log(`The sentiment about ${query} is: ${sentimentScore}`);
    
        } catch(e) {
            console.log("There was an error calling the Twitter API");
            console.dir(e);
        }
    }

}
