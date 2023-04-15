import React from 'react';
import { Box, Card, CardContent, CardMedia, Tooltip, Typography } from '@mui/material';
import { IArticle, WrapperProps } from '../../../models/common';

const CardWrapperComponent = (trendsList: WrapperProps) => {
  // This function will fetch the starting few articles to display on the trending page
  const getFiveArticles = () => {
    const articles: IArticle[] = trendsList.articles;
    const articleLength: number = articles.length > 5 ? 5 : articles.length;
    const content: any[] = [];

    for (let article = 0; article < articleLength; article++) {
      content.push(
        <Tooltip id={articles[article].title} title={articles[article].title}>
          <Typography
            key={articles[article].title}
            variant='body2'
            color='text.secondary'
            component='div'
            gutterBottom
            sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
          >
            # {articles[article].title}
          </Typography>
        </Tooltip>,
      );
    }
    return content;
  };

  return (
    <Card
      sx={{
        display: 'inline-grid',
        margin: '20px',
        padding: '10px',
        width: '40%',
        justifyContent: 'space-between',
      }}
    >
      <Box>
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
          <Typography component='div' variant='h5'>
            {trendsList.title}
          </Typography>
          <CardMedia
            component='img'
            sx={{ width: 110, height: 70 }}
            image={trendsList.image.imageUrl}
            alt={trendsList.image.source}
          />
        </CardContent>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>{getFiveArticles()}</Box>
    </Card>
  );
};

export default CardWrapperComponent;
