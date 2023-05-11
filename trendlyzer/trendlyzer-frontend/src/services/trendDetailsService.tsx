/**
 * Author: Ankita Mohata
 *
 * Contains methods to call APIs
 *
 */

import http from '../config/httpCommon';

// Method to call API to fetch the list of tweets for sentiment analysis
export const getTweets = async (queryParams: any) => {
  return await http.get<any>('/Sentiment/getTweets', { params: queryParams });
};

// Method to call API to get sentiment analysis of the trend
export const getSentimentAnalysis = async (queryParams: any) => {
  return await http.get<any>('/Sentiment/GetSentimentAnalysis', { params: queryParams });
};

// Method to call API to fetch data about trend from chatgpt
export const getChatgptData = async (queryParams: any) => {
  return await http.get<any>('/Trends/getTrendingReasons', { params: queryParams });
};
