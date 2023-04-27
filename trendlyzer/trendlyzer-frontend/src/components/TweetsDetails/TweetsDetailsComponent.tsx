import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TweetDetailsComponent = ({ title, tweets = [] }: any) => {
  return (
    <Box sx={{ ml: 2, boxShadow: '0px 0px 5px 5px rgb(192,192,192)' }}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={title} id={title}>
          <Typography
            key={title}
            variant='subtitle2'
            color='text.secondary'
            component='h4'
            gutterBottom
            sx={{ color: '#560badff' }}
          >
            {title}
          </Typography>
        </AccordionSummary>
        {tweets.map((tweet: string) => {
          return (
            <AccordionDetails key={tweet} sx={{ display: 'inline-flex' }}>
              <Typography variant='body2' component='p' color='#f72585ff'>
                {tweet}
              </Typography>
            </AccordionDetails>
          );
        })}
      </Accordion>
    </Box>
  );
};

export default TweetDetailsComponent;
