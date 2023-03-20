import React, { useContext } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import { ThemeContext } from '../../context/ThemeContext';

const ThemeToggleComponent = () => {
  const { dark, toggleDark } = useContext(ThemeContext);

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography>Light</Typography>
      <Switch
        checked={dark}
        onChange={toggleDark}
        inputProps={{ 'aria-label': 'ant design' }}
      />
      <Typography>Dark</Typography>
    </Stack>
  );
}

export default ThemeToggleComponent;