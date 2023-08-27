import { Typography, Button, Box, Stack, useTheme, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack justifyContent='center' alignItems='center' minHeight='80vh' padding={isMobile ? 2 : 4}>
      <Box textAlign='center'>
        <Typography variant={isMobile ? 'h5' : 'h4'}>Oops! Something went wrong.</Typography>
        <Typography variant='body1'>
          We apologize for the inconvenience. Please try again later.
        </Typography>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Button variant='contained'>Go Back to Home</Button>
        </Link>
      </Box>
    </Stack>
  );
};

export default ErrorPage;
