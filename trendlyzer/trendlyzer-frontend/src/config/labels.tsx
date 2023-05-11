import DailyTrendsComponent from '../components/DailyTrends/DailyTrendscomponent';
import RealTimeTrendsComponent from '../components/RealTimeTrends';
import SentimentAnalysisComponent from '../components/SentimentAnalysis/SentimentAnalysis';
import TrendAnalysisComponent from '../components/TrendAnalysis/TrendAnalysisComponent';

export const headingsLabels = {
  COUNTRY: 'Country',
  CATEGORY: 'Category',
  DAILY_TRENDS: 'Daily Search Trends',
  DASHBOARD: 'Dashboard',
  DATE: 'Date',
  INTEREST_BY_REGION: 'Interest by region',
  LOGOUT: 'Logout',
  REAL_TIME_TRENDS: 'Real-Time Search Trends',
  SENTIMENT: 'Sentiment',
  TREND_DETAILS: 'Trend Details',
  START_DATE: 'Start Date',
  END_DATE: 'End Date',
  SEARCH_KEYWORD: 'Search trend keyword',
  EXPLORE_TRENDS: 'Explore Trends',
  TREND_ANALYSIS: 'Trend Analysis',
  SENTIMENT_ANALYSIS: 'Sentiment Analysis',
  POSITIVE_TWEETS: 'Positive Tweets',
  NEUTRAL_TWEETS: 'Neutral Tweets',
  NEGATIVE_TWEETS: 'Negative Tweets',
};

export const commonMessages = {
  NO_RESULT: 'No Results Found',
};

export const headingsValue = {
  DAILY_TRENDS: 'dailyTrends',
  INTEREST_BY_REGION: 'interestByRegion',
  REAL_TIME_TRENDS: 'realTimeTrends',
  TREND_ANALYSIS: 'trendAnalysis',
  SENTIMENT_ANALYSIS: 'sentimentAnalysis',
};

export const tabsList = [
  {
    id: 0,
    label: headingsLabels.DAILY_TRENDS,
    value: headingsValue.DAILY_TRENDS,
    element: <DailyTrendsComponent />,
  },
  {
    id: 2,
    label: headingsLabels.REAL_TIME_TRENDS,
    value: headingsValue.REAL_TIME_TRENDS,
    element: <RealTimeTrendsComponent />,
  },
];

export const tabsDetailsList = ({
  trendData,
  setTrendData,
  sentimentData,
  setSentimentData,
}: any) => [
  {
    id: 0,
    label: headingsLabels.TREND_ANALYSIS,
    value: headingsValue.TREND_ANALYSIS,
    element: <TrendAnalysisComponent trendData={trendData} setTrendData={setTrendData} />,
  },
  {
    id: 2,
    label: headingsLabels.SENTIMENT_ANALYSIS,
    value: headingsValue.SENTIMENT_ANALYSIS,
    element: (
      <SentimentAnalysisComponent
        sentimentData={sentimentData}
        setSentimentData={setSentimentData}
      />
    ),
  },
];
