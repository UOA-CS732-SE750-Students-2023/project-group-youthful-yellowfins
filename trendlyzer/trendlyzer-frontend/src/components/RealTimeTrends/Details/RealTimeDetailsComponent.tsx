import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import CardWrapperComponent from '../../UIComponents/Card/CardWrapper';
import { getDailyTrends } from '../../../services/dashboardService';
import { RealTimeListResponse, WrapperProps } from '../../../models/common';

const RealTimeDetailsComponent = ({ country, category }: any) => {
  const [trendsList, setTrendsList] = useState<RealTimeListResponse[]>([]);

  useEffect(() => {
    getDailyTrends({
      geocode: country,
      category: 'All',
    })
      .then((response) => {
        if (response.data.status) {
          setTrendsList(response.data.result);
        }
      })
      .catch(() => {});
  }, [country]);

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {trendsList.map((story: WrapperProps, index) => {
        return <CardWrapperComponent key={index} {...story} id={index + 1} />;
      })}
    </Box>
  );
};

export default RealTimeDetailsComponent;
