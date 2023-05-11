import React, { useState } from 'react';
import { Alert, Box, Button, Grid, Snackbar } from '@mui/material';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

import Piechart from '../Sentiment/SemiCircle';
import Loader from '../UIComponents/Loader/LoaderComponent';
import MagnitudeChartComponent from '../Sentiment/MagnitudeChart';
import ModalComponent from '../UIComponents/Modals';
import { sentimentInfo } from '../../config/sentimentInformation';
import TweetDetailsComponent from '../TweetsDetails/TweetsDetailsComponent';
import { headingsLabels } from '../../config/labels';
import NoResultFoundComponent from '../NoResultFound/NoResultFoundComponent';
import NoDataFound from '../Sentiment/NoDataFound';

const SentimentAnalysisComponent = ({ sentimentData, setSentimentData }: any) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { error, loading, showError, tweets } = sentimentData;

  const handleOnIconClicked = () => setShowModal(!showModal);

  return (
    <>
      {loading && <Loader />}
      {error && (
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={showError}
          key='topright'
          onClose={() => setSentimentData((prevState: any) => ({ ...prevState, showError: false }))}
          autoHideDuration={5000}
        >
          <Alert severity='error' sx={{ width: '100%' }}>
            {error}
          </Alert>
        </Snackbar>
      )}
      {showModal && <ModalComponent isModalOpen={showModal} data={sentimentInfo} />}
      {!loading && error && <NoResultFoundComponent />}
      {!loading && tweets.totalTweetsAnalysed === 0 && <NoDataFound />}
      {!loading && !error && tweets.totalTweetsAnalysed !== 0  &&(
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
          <Grid container spacing={2} sx={{ mt: 2 }}>
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
            <Grid item md={4}>
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

export default SentimentAnalysisComponent;
