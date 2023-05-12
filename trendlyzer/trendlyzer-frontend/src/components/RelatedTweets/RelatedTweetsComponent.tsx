import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
  Box,
  Typography,
  Snackbar,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getTweets } from '../../services/trendDetailsService';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Loader from '../UIComponents/Loader/LoaderComponent';
import HourglassBottomTwoToneIcon from '@mui/icons-material/HourglassBottomTwoTone';

const RelatedTweetsComponent = ({ keyword }: string | any) => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState('');
  const [showError, setShowError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getTweets({
      keyword,
      limit: 10,
    })
      .then((response: any) => {
        setTweets(response.data.result || []);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
        setShowError(true);
      });
  }, []);

  return (
    <Box sx={{ boxShadow: '0px 0px 5px 5px rgb(192,192,192)', borderRadius: '10px' }}>
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography
            key='relatedTweets'
            variant='subtitle2'
            color='text.secondary'
            component='h4'
            gutterBottom
            sx={{ color: '#560badff' }}
          >
            Related Tweets
          </Typography>
        </AccordionSummary>
        {loading && <Loader />}
        {tweets.length > 0 &&
          tweets.map((tweet: any) => {
            return (
              <AccordionDetails key={tweet.title} sx={{ display: 'inline-flex' }}>
                <div style={{ height: '250px', overflowY: 'scroll' }}>
                  <TwitterTweetEmbed
                    tweetId={tweet.id}
                    key={tweet.id}
                    placeholder={
                      <Box
                        sx={{
                          display: 'grid',
                          placeItems: 'center',
                          width: '200px',
                          paddingTop: '40px',
                        }}
                      >
                        <HourglassBottomTwoToneIcon /> Loading...
                      </Box>
                    }
                  />
                </div>
              </AccordionDetails>
            );
          })}
        {!tweets.length && (
          <Typography
            key='noTweets'
            variant='subtitle2'
            color='text.secondary'
            component='p'
            gutterBottom
            sx={{ ml: 2 }}
          >
            No tweets found
          </Typography>
        )}
      </Accordion>
    </Box>
  );
};

export default RelatedTweetsComponent;
