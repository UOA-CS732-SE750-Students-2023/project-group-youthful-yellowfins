import React, { useEffect, useState, useContext } from 'react';
import { Box } from '@mui/material';

import Piechart from '../Sentiment/SemiCircle';
import { getSentimentAnalysis } from '../../services/trendDetailsService';
import { TrendDetailsContext } from '../../context/TrendDetailsContext';
import Loader from '../UIComponents/Loader/LoaderComponent';
import MagnitudeChartComponent from '../Sentiment/MagnitudeChart';

const SentimentAnalysisComponent = () => {
  const { trendDetails, setShowNavigation } = useContext(TrendDetailsContext);
  const [loading, setLoading] = useState(false);
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
      .catch(() => {});
    return () => {
      setShowNavigation(false);
    };
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
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
