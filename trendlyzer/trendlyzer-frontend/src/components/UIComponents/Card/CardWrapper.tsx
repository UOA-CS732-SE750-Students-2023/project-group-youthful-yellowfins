/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React from 'react';
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
} from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { IArticle, IRealTimeArticle, WrapperProps } from '../../../models/common';
import classes from './CardWrapper.module.css';

const CardWrapperComponent = (trendsList: WrapperProps) => {
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

  return (
    <Card
      sx={{
        margin: '20px',
        padding: '10px',
        width: '40%',
        justifyContent: 'space-between',
        boxShadow: '0px 0px 5px 5px rgb(192,192,192)',
        borderRadius: '5%',
        display: 'flex',
        flexDirection: 'column',
      }}
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
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between', color: '#f72585ff' }}>
        {trendsList.trafficCount && (
          <Typography component='p' variant='subtitle1'>
            {trendsList.trafficCount} Searches
          </Typography>
        )}
        <Button size='small' onClick={(value: any) => trendsList.handleMoreDetails(value)}>
          More Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardWrapperComponent;
