import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Divider,
  Typography,
  Avatar,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const RelatedArticlesComponent = ({ articles }: any) => {
  return (
    <Box sx={{ boxShadow: '0px 0px 5px 5px rgb(192,192,192)', borderRadius: '10px', mb: 1, mt: 2 }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography
            key='relatedArticles'
            variant='subtitle2'
            color='text.secondary'
            component='h4'
            gutterBottom
            sx={{ color: '#560badff' }}
          >
            Related Articles
          </Typography>
        </AccordionSummary>
        {articles.length > 0 &&
          articles.map((article: any) => {
            return (
              <AccordionDetails key={article.title} sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                  sx={{ width: 56, height: 56 }}
                  src={article.image ? article.image.imageUrl || article.image.imgUrl : ''}
                />
                <Box sx={{ ml: 2 }}>
                  <Typography variant='subtitle2' component='p' color='#f72585ff'>
                    <a
                      href={article.url}
                      target='__blank'
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      {article.title || article.articleTitle}
                    </a>
                    <Typography
                      variant='subtitle2'
                      component='span'
                      color='initial'
                      sx={{ ml: 1, fontStyle: 'italic' }}
                    >
                      {article.timeAgo || article.time}
                    </Typography>
                  </Typography>
                  <Typography variant='body2' component='p'>
                    {article.snippet}
                  </Typography>
                  <Typography variant='body2' component='p' sx={{ fontStyle: 'italic' }}>
                    Source: {article.source}
                  </Typography>
                </Box>
                <Divider />
              </AccordionDetails>
            );
          })}
        {!articles.length && (
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

export default RelatedArticlesComponent;
