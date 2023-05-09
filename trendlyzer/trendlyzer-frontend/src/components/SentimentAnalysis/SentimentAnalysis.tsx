import React, { useEffect, useState, useContext } from 'react';
import { Alert, Box, Button, Snackbar } from '@mui/material';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

import Piechart from '../Sentiment/SemiCircle';
import { getSentimentAnalysis } from '../../services/trendDetailsService';
import { TrendDetailsContext } from '../../context/TrendDetailsContext';
import Loader from '../UIComponents/Loader/LoaderComponent';
import MagnitudeChartComponent from '../Sentiment/MagnitudeChart';
import ModalComponent from '../UIComponents/Modals';
import { sentimentInfo } from '../../config/sentimentInformation';
import TweetDetailsComponent from '../TweetsDetails/TweetsDetailsComponent';
import { headingsLabels } from '../../config/labels';
import NoResultFoundComponent from '../NoResultFound/NoResultFoundComponent';

const SentimentAnalysisComponent = () => {
  const { trendDetails, setShowNavigation } = useContext(TrendDetailsContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showError, setShowError] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const [tweets, setTweets] = useState<any>({
    positiveSentiment: 0,
    neutralSentiments: 0,
    negativeSentiments: 0,
  });

  const handleOnIconClicked = () => setShowModal(!showModal);

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
      {showModal && <ModalComponent isModalOpen={showModal} data={sentimentInfo} />}
      {!loading && error && <NoResultFoundComponent />}
      {!loading && !error && (
        <>
          <Button
            variant='text'
            onClick={handleOnIconClicked}
            sx={{
              float: 'right',
              bottom: '30px',
            }}
          >
            <HelpOutlineOutlinedIcon />
          </Button>
          <Box sx={{ ml: 3, mr: 3, display: 'flex' }}>
            <div style={{ width: '50%' }}>
              <Piechart
                positive={tweets.positiveSentiments}
                negative={tweets.negativeSentiments}
                neutral={tweets.neutralSentiments}
              />
            </div>
            <div style={{ width: '50%' }}>
              <MagnitudeChartComponent
                positive={[tweets.postiveSentimentMagnitude]}
                negative={[tweets.negativeSentimentMagnitude]}
              />
            </div>
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

export default SentimentAnalysisComponent;
