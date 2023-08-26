import { Stack } from '@mui/system';
import { Grid } from '@mui/material';

import ShipCard from 'src/components/shipList/shipCard';
import { ship } from 'src/utils/types';

type shipListProps = { ships: ship[] };

const ShipList: React.FC<shipListProps> = ({ ships }) => {
  return (
    <Grid container spacing={2} height={'90vh'} padding={2}>
      {ships.map((ship) => (
        <Grid key={String(ship.id)} item xs={12} sm={6} md={4} lg={3}>
          <Stack alignItems='center' justifyContent='center'>
            <ShipCard ship={ship} />
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};
export default ShipList;
