import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { Box } from '@mui/material';
import CardWrapperComponent from '../../UIComponents/Card/CardWrapper';
import { getRegionTrends } from '../../../services/dashboardService';
import { TrendsListResponse, WrapperProps } from '../../../models/common';

const RegionDetailsComponent = ({ searchKeyword, startDate, endDate, country }: any) => {
  const [trendsList, setTrendsList] = useState<TrendsListResponse[]>([
    {
      date: '',
      formattedDate: '',
      trendingStories: [],
    },
  ]);

  useEffect(() => {
    if (searchKeyword) {
      // setTimeout(() => {
      //   getRegionTrends({
      //     geocode: country,
      //     keyword: searchKeyword,
      //     startTime: dayjs(startDate).format('YYYY-MM-DD'),
      //     endTime: dayjs(endDate).format('YYYY-MM-DD'),
      //   })
      //     .then((response) => {
      //       console.log('Response', response);
      //       if (response.data.status) {
      //         setTrendsList(response.data.result);
      //       }
      //     })
      //     .catch(() => {});
      // }, 500);
    }
  }, [searchKeyword, startDate, endDate, country]);

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {trendsList[0].trendingStories.length > 0 &&
        trendsList[0].trendingStories.map((story: WrapperProps, index) => {
          return <CardWrapperComponent key={index} {...story} id={index + 1} />;
        })}
      {!trendsList[0].trendingStories.length && (
        <p>Start by providing keyword for trends updated based on region</p>
      )}
    </Box>
  );
};

export default RegionDetailsComponent;
