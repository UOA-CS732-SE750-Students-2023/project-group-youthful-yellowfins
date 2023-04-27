/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { IArticle, IRealTimeArticle, WrapperProps } from '../../../models/common';
import classes from './CardWrapper.module.css';

const CardWrapperComponent = (trendsList: WrapperProps) => {
  const maxWidth9Matches = useMediaQuery('(max-width:991px) and (min-width: 767px)');
  console.log('maxWidth9Matches', maxWidth9Matches);
  const maxWidth7Matches = useMediaQuery('(max-width:576px');
  const [width, setWidth] = useState('45%');

  // This function will fetch the starting few articles to display on the trending page
  const getFiveArticles = () => {
    const articles: IArticle[] | IRealTimeArticle[] = trendsList.articles;
    const articleLength: number = articles.length > 2 ? 2 : articles.length;
    const content: any[] = [];

    for (let article = 0; article < articleLength; article++) {
      content.push(
        <Box sx={{ padding: '0 10px' }}>
          <Box sx={{ display: 'flex' }}>
            <ArticleOutlinedIcon sx={{ paddingRight: '7px' }} />
            <Tooltip
              id={articles[article].title || articles[article].articleTitle}
              title={articles[article].title || articles[article].articleTitle}
            >
              <Typography
                key={articles[article].title || articles[article].articleTitle}
                variant='subtitle2'
                color='text.secondary'
                component='p'
                gutterBottom
                classes={classes.articleStyle}
                sx={{ display: 'flex', color: '#560badff' }}
              >
                {articles[article].title || articles[article].articleTitle}
              </Typography>
            </Tooltip>
          </Box>
          <Box>
            <Typography
              variant='body2'
              color='text.secondary'
              component='p'
              gutterBottom
              classes={classes.articleStyle}
              sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Box>Source: {articles[article].source}</Box>
              <Box>{articles[article].timeAgo || articles[article].time}</Box>
            </Typography>
          </Box>
        </Box>,
      );
    }
    return content;
  };

  useEffect(() => {
    if (maxWidth7Matches) {
      setWidth('90%');
    }
    if (maxWidth9Matches) {
      setWidth('42%');
    }
  }, [maxWidth7Matches, maxWidth9Matches]);

  return (
    <Card
      sx={{
        margin: '20px',
        padding: '10px',
        justifyContent: 'space-between',
        boxShadow: '0px 0px 5px 5px rgb(192,192,192)',
        borderRadius: '3%',
        display: 'flex',
        flexDirection: 'column',
        width,
      }}
      className={classes.cardClass}
    >
      <Box sx={{ paddingBottom: '10px' }}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography component='p' variant='h4'>
            {trendsList.id}
          </Typography>
          <Typography component='div' variant='h5' sx={{ padding: '10px 30px' }}>
            {trendsList.title}
          </Typography>
          <CardMedia
            component='img'
            sx={{ width: 110, height: 70 }}
            image={trendsList.image.imageUrl || trendsList.image.imgUrl}
            alt={trendsList.image.source}
          />
        </CardContent>
        <Divider />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', paddingBottom: '10px' }}>
        {getFiveArticles()}
      </Box>
      <Divider />
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: trendsList.trafficCount ? 'space-between' : 'flex-end',
          color: '#f72585ff',
        }}
      >
        {trendsList.trafficCount && (
          <Typography component='p' variant='subtitle1'>
            {trendsList.trafficCount} Searches
          </Typography>
        )}
        <Button onClick={(value: any) => trendsList.handleMoreDetails(value)}>More Details</Button>
      </CardActions>
    </Card>
  );
};

export default CardWrapperComponent;
