import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { headingsValue, tabsDetailsList } from '../../config/labels';
import TabPanel from '../../components/UIComponents/TabPanel';
import { TrendDetailsContext } from '../../context/TrendDetailsContext';
import TrendDetailsHeaderComponent from '../../components/TrendDetailsHeader/TrendDetailsHeaderComponent';
import { getChatgptData, getSentimentAnalysis } from '../../services/trendDetailsService';
import { CountriesContext } from '../../context/CountriesContext';

const TrendsDetails = () => {
  const { trendDetails, setShowNavigation } = useContext(TrendDetailsContext);
  const { selectedCountry } = useContext(CountriesContext);
  const [tabValue, setTabValue] = useState(headingsValue.TREND_ANALYSIS);
  const [trendData, setTrendData] = useState<any>({
    loading: true,
    error: '',
    showError: false,
    trendReason: '',
    trendBackground: '',
  });
  const [sentimentData, setSentimentData] = useState<any>({
    loading: true,
    error: '',
    showError: false,
    tweets: {
      positiveSentiment: 0,
      neutralSentiments: 0,
      negativeSentiments: 0,
      totalTweetsAnalysed: 0,
    },
  });

  const handleChange = (event: React.SyntheticEvent, value: string) => setTabValue(value);

  useEffect(() => {
    // Fetching the information about the trends using chatgpt
    getChatgptData({ message: trendDetails.title, country: selectedCountry })
      .then((response) => {
        if (response.data.status) {
          setTrendData({
            trendReason: response.data.result.promptTrendingReason,
            trendBackground: response.data.result.promptBackground,
            loading: false,
            error: '',
            showError: false,
          });
        } else {
          setTrendData({
            trendReason: response.data.result.promptTrendingReason,
            trendBackground: response.data.result.promptBackground,
            loading: false,
            error: '',
            showError: false,
          });
        }
      })
      .catch((error) => {
        setTrendData({
          trendReason: '',
          trendBackground: '',
          loading: false,
          error: error.message,
          showError: true,
        });
      });

    // Fetching the sentiment analysis about the trend
    getSentimentAnalysis({
      keyword: trendDetails.title,
      limit: 500,
    })
      .then((response: any) => {
        if (response.data.status) {
          setSentimentData({
            tweets: response.data.result,
            loading: false,
          });
        } else {
          setSentimentData({
            tweets: [],
            loading: false,
            error: '',
            showError: true,
          });
        }
      })
      .catch((error) => {
        setSentimentData({
          tweets: [],
          loading: false,
          error: error.message,
          showError: true,
        });
      });

    return () => {
      setShowNavigation(false);
    };
  }, []);

  return (
    <>
      <TrendDetailsHeaderComponent />
      <Tabs
        value={tabValue}
        onChange={handleChange}
        textColor='secondary'
        indicatorColor='secondary'
        aria-label='secondary tabs example'
        sx={{ padding: '20px' }}
      >
        {tabsDetailsList({ trendData, setTrendData, sentimentData, setSentimentData }).map(
          (tab) => (
            <Tab value={tab.value} label={tab.label} key={tab.value} />
          ),
        )}
      </Tabs>

      {tabsDetailsList({ trendData, setTrendData, sentimentData, setSentimentData }).map((tab) => (
        <TabPanel key={tab.value} value={tabValue} index={tab.value}>
          {tab.element}
        </TabPanel>
      ))}
    </>
  );
};

export default TrendsDetails;
