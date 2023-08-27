import { AppBar, Toolbar, Typography } from '@mui/material';

const HeadBand = () => (
  <AppBar position='static' style={{ width: '100%' }}>
    <Toolbar>
      <Typography style={{ textAlign: 'center', width: '100%' }} variant='h6'>
        List of Ships
      </Typography>
    </Toolbar>
  </AppBar>
);

export default HeadBand;
