import React, { useEffect, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
  Snackbar,
} from '@mui/material';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

import Piechart from '../Sentiment/SemiCircle';
import { getSentimentAnalysis } from '../../services/trendDetailsService';
import Loader from '../UIComponents/Loader/LoaderComponent';
import MagnitudeChartComponent from '../Sentiment/MagnitudeChart';
import { headingsLabels } from '../../config/labels';
import TweetDetailsComponent from '../TweetsDetails/TweetsDetailsComponent';
import useDebounce from '../../hooks/useDebounce';
import ModalComponent from '../UIComponents/Modals';
import { sentimentInfo } from '../../config/sentimentInformation';

const TweetSentimentAnalysisComponent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showError, setShowError] = useState<boolean>(false);
  const [selectedKeyword, setSelectedKeyword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const debouncedSearchTerm: string = useDebounce<string>(selectedKeyword, 500);

  const [tweets, setTweets] = useState<any>({
    positiveSentiment: 0,
    neutralSentiments: 0,
    negativeSentiments: 0,
    totalTweetsAnalysed: 0,
  });

  const handleKeywordChange = (value: any) => setSelectedKeyword(value.target.value);

  const handleOnIconClicked = () => setShowModal(!showModal);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setLoading(true);
      getSentimentAnalysis({
        keyword: debouncedSearchTerm,
        limit: 500,
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
      {showModal && <ModalComponent isModalOpen={showModal} data={sentimentInfo} />}
      <Box sx={{ p: 2, m: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant='h5'
          component='h3'
          gutterBottom
          sx={{ display: 'flex', color: '#560badff' }}
        >
          {headingsLabels.SENTIMENT_ANALYSIS}
        </Typography>
        <Button variant='text' onClick={handleOnIconClicked}>
          <HelpOutlineOutlinedIcon />
        </Button>
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
          <Box sx={{ ml: 3, mr: 3, display: 'flex' }}>
            <div style={{ width: '50%' }}>
              <Piechart
                positive={tweets.positiveSentiments}
                negative={tweets.negativeSentiments}
                neutral={tweets.neutralSentiments}
                totalTweetsAnalysed={tweets.totalTweetsAnalysed}
              />
            </div>
            <div style={{ width: '50%' }}>
              <MagnitudeChartComponent
                positive={[tweets.postiveSentimentMagnitude]}
                negative={[tweets.negativeSentimentMagnitude]}
              />
            </div>
          </Box>
          <Grid container spacing={1} sx={{ mt: 2 }}>
            <Grid item md={4}>
              <TweetDetailsComponent
                title={headingsLabels.POSITIVE_TWEETS}
                tweets={tweets.positiveTweets}
              />
            </Grid>
            <Grid item md={4}>
              <TweetDetailsComponent
                title={headingsLabels.NEUTRAL_TWEETS}
                tweets={tweets.neutralTweets}
              />
            </Grid>
            <Grid item md={4} sx={{ pr: 1 }}>
              <TweetDetailsComponent
                title={headingsLabels.NEGATIVE_TWEETS}
                tweets={tweets.negativeTweets}
              />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default TweetSentimentAnalysisComponent;
