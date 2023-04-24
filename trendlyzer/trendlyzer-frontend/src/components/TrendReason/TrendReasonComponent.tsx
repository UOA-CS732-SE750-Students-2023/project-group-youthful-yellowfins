import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { getChatgptData } from '../../services/trendDetailsService';

const TrendReasonComponent = ({ message }: string | any) => {
  const [trendReason, setTrendReason] = useState('');

  useEffect(() => {
    getChatgptData({ message })
      .then((response) => {
        setTrendReason(response.data.result.promptTrendingReason);
      })
      .catch(() => {});
  }, []);

  return <Box sx={{ mb: 3 }}>{trendReason}</Box>;
};

export default TrendReasonComponent;
