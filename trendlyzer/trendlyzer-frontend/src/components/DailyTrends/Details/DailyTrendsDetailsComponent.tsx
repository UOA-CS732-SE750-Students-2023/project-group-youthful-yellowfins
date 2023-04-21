/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState, useEffect, useContext } from 'react';
import dayjs from 'dayjs';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import CardWrapperComponent from '../../UIComponents/Card/CardWrapper';
import { getDailyTrends } from '../../../services/dashboardService';
import { TrendsListResponse, WrapperProps } from '../../../models/common';
import { TrendDetailsContext } from '../../../context/TrendDetailsContext';

const DailyTrendsDetailsComponent = ({ country, date }: any) => {
  const [trendsList, setTrendsList] = useState<TrendsListResponse[]>([
    {
      date: '',
      formattedDate: '',
      trendingStories: [],
    },
  ]);
  const { handleTrendDetails } = useContext(TrendDetailsContext);
  const navigate = useNavigate();

  const handleMoreDetails = (value: any) => {
    handleTrendDetails(value);
    navigate({
      pathname: `/trendsDetails/${value.id}`,
    });
  };

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
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {trendsList[0].trendingStories.map((story: WrapperProps, index) => {
        return (
          <CardWrapperComponent
            key={index}
            {...story}
            id={index + 1}
            handleMoreDetails={() => handleMoreDetails({ ...story, id: index + 1 })}
          />
        );
      })}
    </Box>
  );
};

export default DailyTrendsDetailsComponent;
