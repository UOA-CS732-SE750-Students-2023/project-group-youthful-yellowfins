import React, { useEffect, useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getTweets } from '../../services/trendDetailsService';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const RelatedTweetsComponent = ({ keyword }: string | any) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    getTweets({
      keyword,
      limit: 10,
    })
      .then((response: any) => {
        setTweets(response.data.result);
      })
      .catch(() => {});
  }, []);

  return (
    <Box sx={{ boxShadow: '0px 0px 5px 5px rgb(192,192,192)', borderRadius: '10px' }}>
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
        {tweets.map((tweet: any) => {
          return (
            <AccordionDetails key={tweet.title} sx={{ display: 'inline-flex' }}>
              <TwitterTweetEmbed tweetId={tweet.id_str} key={tweet.id} />
            </AccordionDetails>
          );
        })}
      </Accordion>
    </Box>
  );
};

export default RelatedTweetsComponent;
