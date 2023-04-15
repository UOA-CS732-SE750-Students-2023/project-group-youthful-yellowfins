import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { Box } from '@mui/material';
import CardWrapperComponent from '../../UIComponents/Card/CardWrapper';
import { getDailyTrends } from '../../../services/dashboardService';
import { TrendsListResponse, WrapperProps } from '../../../models/common';

const DailyTrendsDetailsComponent = ({ country, date }: any) => {
  const [trendsList, setTrendsList] = useState<TrendsListResponse[]>([
    {
      date: '',
      formattedDate: '',
      trendingStories: [],
    },
  ]);

  useEffect(() => {
    getDailyTrends({
      geocode: country,
      category: 'All',
      date: dayjs(date).format('YYYY-MM-DD'),
    })
      .then((response) => {
        if (response.data.status) {
          setTrendsList(response.data.result);
        }
      })
      .catch(() => {});
  }, [country, date]);

  return (
    <Box>
      {trendsList[0].trendingStories.map((story: WrapperProps, index) => {
        return <CardWrapperComponent key={index} {...story} id={index} />;
      })}
    </Box>
  );
};

export default DailyTrendsDetailsComponent;
