import React, { useEffect, useState, useContext } from 'react';
import { Alert, Box, Snackbar } from '@mui/material';

import Piechart from '../Sentiment/SemiCircle';
import { getSentimentAnalysis } from '../../services/trendDetailsService';
import { TrendDetailsContext } from '../../context/TrendDetailsContext';
import Loader from '../UIComponents/Loader/LoaderComponent';
import MagnitudeChartComponent from '../Sentiment/MagnitudeChart';

const SentimentAnalysisComponent = () => {
  const { trendDetails, setShowNavigation } = useContext(TrendDetailsContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showError, setShowError] = useState<boolean>(false);

  const [tweets, setTweets] = useState<any>({
    positiveSentiment: 0,
    neutralSentiments: 0,
    negativeSentiments: 0,
  });

  useEffect(() => {
    setLoading(true);
    setShowNavigation(true);
    getSentimentAnalysis({
      keyword: trendDetails.title,
      limit: 5,
    })
      .then((response: any) => {
        setTweets(response.data.result);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
        setShowError(true);
      });
    return () => {
      setShowNavigation(false);
    };
  }, []);

  return (
    <>
      {loading && <Loader />}
      {error && (
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={showError}
          key='topright'
          onClose={() => setShowError(false)}
          autoHideDuration={5000}
        >
          <Alert severity='error' sx={{ width: '100%' }}>
            {error}
          </Alert>
        </Snackbar>
      )}
      {!loading && !error && (
        <Box sx={{ ml: 3, mr: 3 }}>
          <Piechart
            positive={tweets.positiveSentiments}
            negative={tweets.negativeSentiments}
            neutral={tweets.neutralSentiments}
          />
          <MagnitudeChartComponent
            positive={[tweets.postiveSentimentMagnitude]}
            negative={[tweets.negativeSentimentMagnitude]}
          />
        </Box>
      )}
    </>
  );
};

export default SentimentAnalysisComponent;
