export const sentimentInfo = [
  {
    title: 'HOW ARE WE DOING SENTIMENT ANALYSIS?',
    description:
      'Whenever you select a trend and explore the sentiment module, we use that trending keyword and get related tweets regarding that keyword. Due to paid quota restrictions, we are currently fetching only ten tweets. We then clean the tweets using NLP cleaning techniques. Once we have the data, we send to Google NLP service, which provides the results regarding sentiment analysis.',
  },
  {
    title: 'HOW TO ANALYZE SENTIMENT?',
    description: `Below you can see there are two charts and some tweets, so lets go by it one by one.
      - Sentiment Overview Pie Chart
        This pie chart demonstrates the overall sentiment of the tweets, analysed. We pass each tweet individually to Google NLP service. When it returns a positive value, it is termed a positive sentiment; neutral tweets have 0 as a sentiment value and are negative values for negative tweets. So, you can read it in such a way that, out of 10 tweets analysed, 5 were positive, 4 were negative and 1 was neutral which will have percentage values of 50%,40% and 10% respectively.\n
      - Sentiment Magnitude Bar Chart
        The bar chart demonstrates the measurement of the strength or intensity of the sentiment expressed in a piece of text. It helps to determine how strongly positive or negative a particular sentiment is. For example, let's say you have a sentence like, "I really love this movie!" The sentiment analysis algorithm might assign a sentiment score of +0.9 and a magnitude of 0.9 to this sentence. The positive sentiment score of +0.9 indicates that the sentiment is positive, and the magnitude of 0.9 shows that the sentiment is strongly positive.\n
        Similarly, if the algorithm analyses a sentence like, "I hate Mondays," it might assign a sentiment score of -0.8 and a magnitude of 0.8. In this case, the negative sentiment score of -0.8 indicates a negative sentiment, and the magnitude of 0.8 signifies that the sentiment is quite strong. The values you see on bar chart is an average of all negative sentiment magnitude for negative magnitude and vice versa.\n
      - Tweets
        If you want to validate those results, you can view the tweets which results in those sections.`,
  },
];
