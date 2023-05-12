import { Typography } from '@mui/material';
import { commonMessages } from '../../config/labels';

const NoResultFoundComponent = ({data}: any) => {
  return (
    <Typography component='p' variant='subtitle1' sx={{ m: 4 }}>
      {commonMessages.NO_RESULT}
      <br></br>
      {data}
    </Typography>
  );
};

export default NoResultFoundComponent;
