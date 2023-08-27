import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { getCountryOfOrigin, useFlexibleSizes } from 'src/utils';
import { ship } from 'src/utils/types';

const useClasses = makeStyles(() => ({
  card: {
    transition: 'transform 0.25s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  link: {
    textDecoration: 'none',
  },
}));

const ShipCard: React.FC<{ ship: ship }> = ({ ship }) => {
  const classes = useClasses();
  const width = useFlexibleSizes({
    xxs: 200,
    xs: 270,
    sm: 290,
    md: 290,
    lg: 290,
  });
  return (
    <Link to={`ships/${ship.id}`} className={classes.link}>
      <Card sx={{ width }} className={classes.card}>
        <CardContent>
          <Typography variant='h6'>{ship.name}</Typography>
          <Typography>Country: {getCountryOfOrigin(ship.owner) || 'Unknown'}</Typography>
          <Typography>TEU: {ship.maxTEU}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ShipCard;
