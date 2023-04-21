import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Card, CardContent, CardMedia, Typography, Stack, Avatar, Paper } from '@mui/material';
import { TrendDetailsContext } from '../../context/TrendDetailsContext';

const TrendsDetails = () => {
  const { id } = useParams();
  const { trendDetails } = useContext(TrendDetailsContext);

  return (
    <Box sx={{ ml: 3, mr: 3 }}>
      <h4>Trends Details</h4>
      <Typography
        key={trendDetails.title || trendDetails.articleTitle}
        variant='h3'
        color='text.secondary'
        component='h3'
        gutterBottom
        sx={{ display: 'flex', color: '#560badff' }}
      >
        {trendDetails.title || trendDetails.articleTitle}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Card
          sx={{
            width: '30%',
            boxShadow: '0px 0px 5px 5px rgb(192,192,192)',
            borderRadius: '15px',
          }}
        >
          <CardContent sx={{ textAlign: 'center', justifyContent: 'space-between' }}>
            <Typography gutterBottom variant='subtitle1' component='div'>
              Searches
            </Typography>
            <Typography variant='h4' color='text.secondary'>
              {trendDetails.trafficCount}
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: '30%',
            boxShadow: '0px 0px 5px 5px rgb(192,192,192)',
            borderRadius: '15px',
          }}
        >
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography gutterBottom variant='subtitle1' component='div'>
              Source
              <br />
              {/* <Typography variant='h5' variant='subtitle2' color='text.secondary'> */}
              {trendDetails.image.source}
              {/* </Typography> */}
            </Typography>

            <CardMedia
              component='img'
              sx={{ width: 110, height: 70 }}
              image={trendDetails.image.imageUrl}
              alt={trendDetails.image.source}
            />
          </CardContent>
        </Card>
        <Card
          sx={{
            width: '30%',
            boxShadow: '0px 0px 5px 5px rgb(192,192,192)',
            borderRadius: '15px',
          }}
        >
          <CardContent sx={{ textAlign: 'center', justifyContent: 'space-between' }}>
            <Typography gutterBottom variant='subtitle1' component='div'>
              Average Sentiment Score
            </Typography>
            <Typography variant='h4' color='text.secondary'>
              0
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Typography
        key='relatedArticles'
        variant='h3'
        color='text.secondary'
        component='h3'
        gutterBottom
        sx={{ display: 'flex', color: '#560badff' }}
      >
        Related Articles
      </Typography>
      {trendDetails.articles.map((article: any) => {
        return (
          <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }} key={article.title}>
            <Paper
              sx={{
                my: 1,
                mx: 'auto',
                p: 2,
              }}
            >
              <Stack spacing={2} direction='row' alignItems='center'>
                <Avatar>{article.image.imageUrl}</Avatar>
                <Box>
                  <Typography>{article.title}</Typography>
                  <Typography variant='body2' component='p'>
                    {article.snippet}
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Box>
        );
      })}
    </Box>
  );
};

export default TrendsDetails;
