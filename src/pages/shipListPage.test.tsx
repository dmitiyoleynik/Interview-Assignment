import { prettyDOM, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ShipListPage from './shipListPage';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ShipInfo from './shipInfo';
import * as useStoreModule from 'src/store';
import { act } from 'react-test-renderer';

const store = {
  isLoading: false,
  ships: [
    {
      id: 1,
      built: 2017,
      name: 'OOCL Hong Kong',
      lengthMeters: 399.87,
      beamMeters: 58.8,
      maxTEU: 21413,
      owner: 'OOCL (Hong Kong)',
      grossTonnage: 210890,
    },
    {
      id: 2,
      built: 2017,
      name: 'OOCL Germany',
      lengthMeters: 399.87,
      beamMeters: 58.8,
      maxTEU: 21413,
      owner: 'OOCL (Hong Kong)',
      grossTonnage: 210890,
    },
    {
      id: 3,
      built: 2017,
      name: 'OOCL Japan',
      lengthMeters: 399.87,
      beamMeters: 58.8,
      maxTEU: 21413,
      owner: 'OOCL (Hong Kong)',
      grossTonnage: 210890,
    },
    {
      id: 9,
      built: 2017,
      name: 'MOL Trust',
      lengthMeters: 400,
      beamMeters: 58.8,
      maxTEU: 20170,
      owner: 'Mitsui O.S.K. Lines',
      grossTonnage: 199000,
    },
    {
      id: 10,
      built: 2017,
      name: 'MOL Tribute',
      lengthMeters: 400,
      beamMeters: 58.8,
      maxTEU: 20170,
      owner: 'Mitsui O.S.K. Lines',
      grossTonnage: 199000,
    },
    {
      id: 11,
      built: 2017,
      name: 'MOL Tradition',
      lengthMeters: 400,
      beamMeters: 58.8,
      maxTEU: 20170,
      owner: 'Mitsui O.S.K. Lines',
      grossTonnage: 199000,
    },
    {
      id: 12,
      built: 2016,
      name: 'MSC Jade',
      lengthMeters: 398.45,
      beamMeters: 59.07,
      maxTEU: 19224,
      owner: 'Mediterranean Shipping Company',
      grossTonnage: 194308,
    },
    {
      id: 13,
      built: 2016,
      name: 'MSC Ditte',
      lengthMeters: 398.43,
      beamMeters: 59.08,
      maxTEU: 19224,
      owner: 'Mediterranean Shipping Company',
      grossTonnage: 194308,
    },
    {
      id: 14,
      built: 2016,
      name: 'MSC Reef',
      lengthMeters: 398.43,
      beamMeters: 59.08,
      maxTEU: 19224,
      owner: 'Mediterranean Shipping Company',
      grossTonnage: 194308,
    },
    {
      id: 15,
      built: 2016,
      name: 'MSC Mirja',
      lengthMeters: 398.43,
      beamMeters: 59.08,
      maxTEU: 19224,
      owner: 'Mediterranean Shipping Company',
      grossTonnage: 194308,
    },
    {
      id: 16,
      built: 2016,
      name: 'MSC Erica',
      lengthMeters: 398.43,
      beamMeters: 59.08,
      maxTEU: 19224,
      owner: 'Mediterranean Shipping Company',
      grossTonnage: 194308,
    },
    {
      id: 17,
      built: 2017,
      name: 'MSC Tina',
      lengthMeters: 398.43,
      beamMeters: 59.08,
      maxTEU: 19224,
      owner: 'Mediterranean Shipping Company',
      grossTonnage: 194308,
    },
    {
      id: 18,
      built: 2016,
      name: 'MSC Diana',
      lengthMeters: 399.994,
      beamMeters: 58.839,
      maxTEU: 19224,
      owner: 'Mediterranean Shipping Company',
      grossTonnage: 193489,
    },
    {
      id: 19,
      built: 2016,
      name: 'MSC Ingy',
      lengthMeters: 399.994,
      beamMeters: 58.839,
      maxTEU: 19224,
      owner: 'Mediterranean Shipping Company',
      grossTonnage: 193489,
    },
    {
      id: 20,
      built: 2016,
      name: 'MSC Eloane',
      lengthMeters: 399.994,
      beamMeters: 58.839,
      maxTEU: 19224,
      owner: 'Mediterranean Shipping Company',
      grossTonnage: 193489,
    },
    {
      id: 21,
      built: 2016,
      name: 'MSC Mirjan',
      lengthMeters: 399.994,
      beamMeters: 58.839,
      maxTEU: 19224,
      owner: 'Mediterranean Shipping Company',
      grossTonnage: 193489,
    },
    {
      id: 22,
      built: 2017,
      name: 'MSC Rifaya',
      lengthMeters: 399.994,
      beamMeters: 58.839,
      maxTEU: 19224,
      owner: 'Mediterranean Shipping Company',
      grossTonnage: 193489,
    },
    {
      id: 23,
      built: 2017,
      name: 'MSC Leanne',
      lengthMeters: 399.994,
      beamMeters: 58.839,
      maxTEU: 19224,
      owner: 'Mediterranean Shipping Company',
      grossTonnage: 193489,
    },
    {
      id: 24,
      built: 2015,
      name: 'MSC Oscar',
      lengthMeters: 395.4,
      beamMeters: 59,
      maxTEU: 19224,
      owner: 'MSC (Switzerland)',
      grossTonnage: 192237,
    },
    {
      id: 25,
      built: 2015,
      name: 'MSC Oliver',
      lengthMeters: 395.4,
      beamMeters: 59,
      maxTEU: 19224,
      owner: 'MSC (Switzerland)',
      grossTonnage: 192237,
    },
    {
      id: 26,
      built: 2015,
      name: 'MSC Zoe',
      lengthMeters: 395.4,
      beamMeters: 59,
      maxTEU: 19224,
      owner: 'MSC (Switzerland)',
      grossTonnage: 192237,
    },
    {
      id: 27,
      built: 2015,
      name: 'MSC Maya',
      lengthMeters: 395.4,
      beamMeters: 59,
      maxTEU: 19224,
      owner: 'MSC (Switzerland)',
      grossTonnage: 192237,
    },
    {
      id: 28,
      built: 2014,
      name: 'CSCL Globe',
      lengthMeters: 399.67,
      beamMeters: 58.6,
      maxTEU: 19100,
      owner: 'CSCL (China)',
      grossTonnage: 187541,
    },
    {
      id: 29,
      built: 2014,
      name: 'CSCL Pacific Ocean',
      lengthMeters: 399.67,
      beamMeters: 58.6,
      maxTEU: 19100,
      owner: 'CSCL (China)',
      grossTonnage: 187541,
    },
    {
      id: 30,
      built: 2015,
      name: 'CSCL Indian Ocean',
      lengthMeters: 399.67,
      beamMeters: 58.6,
      maxTEU: 19100,
      owner: 'CSCL (China)',
      grossTonnage: 187541,
    },
    {
      id: 31,
      built: 2015,
      name: 'CSCL Atlantic Ocean',
      lengthMeters: 399.67,
      beamMeters: 58.6,
      maxTEU: 19100,
      owner: 'CSCL (China)',
      grossTonnage: 187541,
    },
    {
      id: 32,
      built: 2015,
      name: 'CSCL Arctic Ocean',
      lengthMeters: 399.67,
      beamMeters: 58.6,
      maxTEU: 19100,
      owner: 'CSCL (China)',
      grossTonnage: 187541,
    },
    {
      id: 33,
      built: 2015,
      name: 'Barzan',
      lengthMeters: 400,
      beamMeters: 58.6,
      maxTEU: 18800,
      owner: 'UASC (Kuwait)',
      grossTonnage: 195636,
    },
    {
      id: 34,
      built: 2013,
      name: 'Magleby Maersk',
      lengthMeters: 400,
      beamMeters: 59,
      maxTEU: 18270,
      owner: 'Maersk (Denmark)',
      grossTonnage: 194849,
    },
    {
      id: 35,
      built: 2014,
      name: 'MSC New York',
      lengthMeters: 399,
      beamMeters: 54,
      maxTEU: 18270,
      owner: 'MSC (Switzerland)',
      grossTonnage: 176490,
    },
    {
      id: 36,
      built: 2013,
      name: 'Madison Maersk',
      lengthMeters: 400,
      beamMeters: 59,
      maxTEU: 18270,
      owner: 'Maersk (Denmark)',
      grossTonnage: 194849,
    },
    {
      id: 37,
      built: 2013,
      name: 'Mærsk Mc-Kinney Møller',
      lengthMeters: 400,
      beamMeters: 59,
      maxTEU: 18270,
      owner: 'Maersk (Denmark)',
      grossTonnage: 194849,
    },
    {
      id: 38,
      built: 2013,
      name: 'Majestic Mærsk',
      lengthMeters: 400,
      beamMeters: 59,
      maxTEU: 18270,
      owner: 'Maersk (Denmark)',
      grossTonnage: 194849,
    },
    {
      id: 39,
      built: 2013,
      name: 'Mary Mærsk',
      lengthMeters: 400,
      beamMeters: 59,
      maxTEU: 18270,
      owner: 'Maersk (Denmark)',
      grossTonnage: 194849,
    },
    {
      id: 40,
      built: 2013,
      name: 'Marie Mærsk',
      lengthMeters: 400,
      beamMeters: 59,
      maxTEU: 18270,
      owner: 'Maersk (Denmark)',
      grossTonnage: 194849,
    },
  ],
  fetchShips: async () => {},
};

jest.mock('src/store', () => ({
  __esModule: true,
  default: () => {
    return store;
  },
}));

test('ShipListPage renders header and ship list when not loading', async () => {
  const headBandLabel = 'List of Ships';
  const mockUseStore = jest.spyOn(useStoreModule, 'default');
  mockUseStore.mockReturnValue(store);

  const { getByText } = render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route index element={<ShipListPage />} />
        <Route path='/ships/:shipId' element={<ShipInfo />} />
        <Route path='/error' element={<div>Error Page</div>} />
      </Routes>
    </MemoryRouter>,
  );

  const header = getByText(headBandLabel);
  const ship1 = getByText('OOCL Hong Kong');
  const ship2 = getByText(store.ships[1].name);
  const ship3 = getByText(store.ships[2].name);

  expect(header).toBeInTheDocument();
  expect(ship1).toBeInTheDocument();
  expect(ship2).toBeInTheDocument();
  expect(ship3).toBeInTheDocument();
});

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

test('ShipListPage navigates to next page when pagination is clicked', async () => {
  const mockUseStore = jest.spyOn(useStoreModule, 'default');
  mockUseStore.mockReturnValue(store);

  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route index element={<ShipListPage />} />
        <Route path='/ships/:shipId' element={<ShipInfo />} />
        <Route path='/error' element={<div>Error Page</div>} />
      </Routes>
    </MemoryRouter>,
  );

  const nextPageButton = screen.getByRole('button', { name: 'Go to page 2' });

  userEvent.click(nextPageButton);

  await waitFor(() => {
    const currentPageButton = screen.getByRole('button', { name: 'page 2' });
    expect(currentPageButton).toBeInTheDocument();
    expect(currentPageButton.getAttribute('aria-current')).toBeTruthy;
  });
});
