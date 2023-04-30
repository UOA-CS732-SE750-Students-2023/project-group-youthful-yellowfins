import React, { useEffect, useState } from 'react';
import { Alert, Box, FormControl, TextField, Typography, Snackbar } from '@mui/material';

import Piechart from '../Sentiment/SemiCircle';
import { getSentimentAnalysis } from '../../services/trendDetailsService';
import Loader from '../UIComponents/Loader/LoaderComponent';
import MagnitudeChartComponent from '../Sentiment/MagnitudeChart';
import { headingsLabels } from '../../config/labels';
import TweetDetailsComponent from '../TweetsDetails/TweetsDetailsComponent';
import useDebounce from '../../hooks/useDebounce';

const TweetSentimentAnalysisComponent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showError, setShowError] = useState<boolean>(false);
  const [selectedKeyword, setSelectedKeyword] = useState('');
  const debouncedSearchTerm: string = useDebounce<string>(selectedKeyword, 500);

  const [tweets, setTweets] = useState<any>({
    positiveSentiment: 0,
    neutralSentiments: 0,
    negativeSentiments: 0,
  });

  const handleKeywordChange = (value: any) => setSelectedKeyword(value.target.value);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setLoading(true);
      getSentimentAnalysis({
        keyword: debouncedSearchTerm,
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
    }
  }, [debouncedSearchTerm]);

  return (
    <>
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
      <Box sx={{ p: 2, m: 2 }}>
        <Typography
          variant='h5'
          component='h3'
          gutterBottom
          sx={{ display: 'flex', color: '#560badff' }}
        >
          {headingsLabels.SENTIMENT_ANALYSIS}
        </Typography>
      </Box>
      <FormControl fullWidth sx={{ mb: 3 }}>
        <TextField
          id='outlined-basic'
          label={headingsLabels.SEARCH_KEYWORD}
          variant='outlined'
          sx={{ ml: 4, mr: 3, flex: 1 }}
          placeholder={headingsLabels.SEARCH_KEYWORD}
          inputProps={{ 'aria-label': headingsLabels.SEARCH_KEYWORD }}
          onChange={(value: any) => handleKeywordChange(value)}
          value={selectedKeyword}
        />
      </FormControl>
      {loading && <Loader />}
      {!loading && !error && debouncedSearchTerm && (
        <>
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
          <Box sx={{ m: 4, display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <TweetDetailsComponent
                title={headingsLabels.POSITIVE_TWEETS}
                tweets={tweets.positiveTweets}
              />
            </div>
            <div>
              <TweetDetailsComponent
                title={headingsLabels.NEUTRAL_TWEETS}
                tweets={tweets.neutralTweets}
              />
            </div>
            <div>
              <TweetDetailsComponent
                title={headingsLabels.NEGATIVE_TWEETS}
                tweets={tweets.negativeTweets}
              />
            </div>
          </Box>
        </>
      )}
    </>
  );
};

export default TweetSentimentAnalysisComponent;
