import { Box, CircularProgress } from '@mui/material';
import { useState } from 'react';

import HeadBand from 'src/components/shipList/headBand';
import ShipListPagination from 'src/components/shipList/pagination';
import ShipList from 'src/components/shipList/shipList';
import useStore from 'src/store';
import { useFlexibleSizes } from 'src/utils';

const ShipListPage: React.FC = () => {
  const itemsPerPage = useFlexibleSizes({ xxs: 5, xs: 5, sm: 10, md: 15, lg: 20 });
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, ships } = useStore();

  const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentShips = ships.slice(startIndex, endIndex);

  return (
    <main>
      <HeadBand />
      {!isLoading ? (
        <ShipList ships={currentShips} />
      ) : (
        <Box display='flex' justifyContent='center' alignItems='center' height='80vh'>
          <CircularProgress size={60} thickness={4} />
        </Box>
      )}
      <ShipListPagination
        count={Math.ceil(ships.length / itemsPerPage)}
        currentPage={currentPage}
        handleChangePage={handleChangePage}
      />
    </main>
  );
};
export default ShipListPage;
