import React from 'react';
import { Box, Typography } from '@mui/material';

const TrendReasonComponent = ({ trendBackground, trendReason }: string | any) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography component='h5' variant='h6' sx={{ pt: 2, color: '#560badff' }}>
        Background information about this trend
      </Typography>
      <Typography component='p' variant='subtitle1' sx={{ pt: 2 }}>
        {trendBackground}
      </Typography>
      <Typography component='h5' variant='h6' sx={{ pt: 3, color: '#560badff' }}>
        Why is it trending?
      </Typography>
      <Typography component='p' variant='subtitle1' sx={{ pt: 2 }}>
        {trendReason}
      </Typography>
    </Box>
  );
};

export default TrendReasonComponent;
