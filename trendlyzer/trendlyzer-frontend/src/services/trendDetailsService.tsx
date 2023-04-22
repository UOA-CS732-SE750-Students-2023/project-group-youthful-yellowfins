import http from '../config/httpCommon';

export const getTweets = async (queryParams: any) => {
  return await http.get<any>('/Sentiment/getTweets', { params: queryParams });
};

export const getSentimentAnalysis = async (queryParams: any) => {
  return await http.get<any>('/Sentiment/GetSentimentAnalysis', { params: queryParams });
};

export const getChatgptData = async (queryParams: any) => {
  return await http.get<any>('/Trends/getTrendingReasons', { params: queryParams });
};
