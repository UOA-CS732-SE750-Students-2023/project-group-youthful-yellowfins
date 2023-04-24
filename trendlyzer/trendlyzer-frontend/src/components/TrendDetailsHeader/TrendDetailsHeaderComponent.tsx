import React, { useContext } from 'react';
import { Box, CardContent, CardMedia, Divider, Typography } from '@mui/material';
import { TrendDetailsContext } from '../../context/TrendDetailsContext';
import { useParams } from 'react-router';

const TrendDetailsHeaderComponent = () => {
  const { id } = useParams();
  const { trendDetails } = useContext(TrendDetailsContext);

  return (
    <>
      <Box
        sx={{
          ml: 2,
          mr: 3,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <CardContent sx={{ textAlign: 'center', justifyContent: 'space-between' }}>
          {trendDetails.trafficCount ? (
            <>
              <Typography variant='h4' color='#f72585ff'>
                {trendDetails.trafficCount}
              </Typography>
              <Typography gutterBottom variant='subtitle2' component='p'>
                Searches
              </Typography>
            </>
          ) : (
            <Typography variant='h4' component='h4'>
              {id}
            </Typography>
          )}
        </CardContent>
        <Typography
          component='h4'
          key={trendDetails.title || trendDetails.articleTitle}
          variant='h4'
          sx={{ padding: '10px 30px', color: '#560badff' }}
        >
          {trendDetails.title || trendDetails.articleTitle}
        </Typography>
        <CardMedia
          component='img'
          sx={{ width: 110, height: 70 }}
          image={trendDetails.image.imageUrl || trendDetails.image.imgUrl}
          alt={trendDetails.image.source}
        />
      </Box>
      <Divider />
    </>
  );
};

export default TrendDetailsHeaderComponent;
