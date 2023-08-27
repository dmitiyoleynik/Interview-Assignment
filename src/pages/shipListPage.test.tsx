import { render, screen } from '@testing-library/react';

import ShipListPage from 'src/pages/shipListPage';
import * as useStoreModule from 'src/store';

test('ShipListPage renders loading indicator when loading', () => {
  const mockUseStore = jest.spyOn(useStoreModule, 'default');
  mockUseStore.mockReturnValue({
    isLoading: true,
    ships: [],
  });

  render(<ShipListPage />);

  const loadingIndicator = screen.getByRole('progressbar');

  expect(loadingIndicator).toBeInTheDocument();
});
