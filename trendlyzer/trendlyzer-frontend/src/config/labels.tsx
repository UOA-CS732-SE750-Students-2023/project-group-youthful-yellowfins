import DailyTrendsComponent from '../components/DailyTrends';
import InterestByRegionComponent from '../components/InterestByRegion';
import RealTimeTrendsComponent from '../components/RealTimeTrends';

export const headingsLabels = {
  COUNTRY: 'Country',
  DAILY_TRENDS: 'Daily Trends',
  DASHBOARD: 'Dashboard',
  DATE: 'Date',
  INTEREST_BY_REGION: 'Interest by region',
  LOGOUT: 'Logout',
  REAL_TIME_TRENDS: 'Real time Trends',
  SENTIMENT: 'Sentiment',
  TREND_DETAILS: 'Trend Details',
  START_DATE: 'Start Date',
  END_DATE: 'End Date',
};

export const headingsValue = {
  DAILY_TRENDS: 'dailyTrends',
  INTEREST_BY_REGION: 'interestByRegion',
  REAL_TIME_TRENDS: 'realTimeTrends',
};

export const tabsList = [
  {
    id: 0,
    label: headingsLabels.DAILY_TRENDS,
    value: headingsValue.DAILY_TRENDS,
    element: <DailyTrendsComponent />,
  },
  {
    id: 1,
    label: headingsLabels.INTEREST_BY_REGION,
    value: headingsValue.INTEREST_BY_REGION,
    element: <InterestByRegionComponent />,
  },
  {
    id: 2,
    label: headingsLabels.REAL_TIME_TRENDS,
    value: headingsValue.REAL_TIME_TRENDS,
    element: <RealTimeTrendsComponent />,
  },
];
