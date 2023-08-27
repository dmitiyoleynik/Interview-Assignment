import { AppBar, Pagination, Stack } from '@mui/material';

import { useFlexibleSizes } from 'src/utils';

type ShipListPaginationProps = {
  count: number;
  currentPage: number;
  handleChangePage: (event: React.ChangeEvent<unknown>, newPage: number) => void;
};
const ShipListPagination: React.FC<ShipListPaginationProps> = (props) => {
  const size = useFlexibleSizes<'small' | 'medium' | 'large'>({
    xs: 'medium',
    sm: 'large',
    md: 'large',
    lg: 'large',
    xl: 'large',
  });

  return (
    <AppBar position='fixed' color='primary' style={{ top: 'auto', bottom: 0 }}>
      <Stack direction={'row'} justifyContent={'center'}>
        <Pagination
          hidePrevButton
          hideNextButton
          sx={{ paddingTop: 1, paddingBottom: 1 }}
          count={props.count}
          page={props.currentPage}
          onChange={props.handleChangePage}
          size={size}
        />
      </Stack>
    </AppBar>
  );
};

export default ShipListPagination;
