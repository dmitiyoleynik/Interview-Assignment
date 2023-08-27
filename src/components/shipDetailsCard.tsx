import { Link } from 'react-router-dom';
import { Button, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';

import { getCountryOfOrigin } from 'src/utils';
import { Ship } from 'src/utils/types';

type ShipDetailsCardProps = {
  ship: Ship;
};

const ShipDetailsCard: React.FC<ShipDetailsCardProps> = ({ ship }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Paper
      sx={{
        maxWidth: isMobile ? '100%' : 400,
        margin: '0 auto',
        padding: isMobile ? 2 : 4,
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant={isMobile ? 'h5' : 'h6'}>{ship.name}</Typography>
      <Typography>Country of origin: {getCountryOfOrigin(ship.owner) || 'Unknown'}</Typography>
      <Typography>Built: {ship.built}</Typography>
      <Typography>Name: {ship.name}</Typography>
      <Typography>Length: {ship.lengthMeters} meters</Typography>
      <Typography>Beam: {ship.beamMeters} meters</Typography>
      <Typography>Max TEU: {ship.maxTEU}</Typography>
      <Typography>Owner: {ship.owner}</Typography>
      <Typography>Gross Tonnage: {ship.grossTonnage} tons</Typography>
      <Button
        variant='contained'
        color='primary'
        component={Link}
        to='/'
        sx={{ marginTop: isMobile ? 2 : 4 }}
      >
        Back to List
      </Button>
    </Paper>
  );
};

export default ShipDetailsCard;
