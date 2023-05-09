import { Typography } from '@mui/material';
import { commonMessages } from '../../config/labels';

const NoResultFoundComponent = () => {
  return (
    <Typography component='p' variant='subtitle1' sx={{ m: 1 }}>
      {commonMessages.NO_RESULT}
    </Typography>
  );
};

export default NoResultFoundComponent;
