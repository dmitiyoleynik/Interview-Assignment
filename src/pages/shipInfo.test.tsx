import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ShipInfo from './shipInfo';

jest.mock('src/store', () => ({
  __esModule: true,
  default: () => {
    return {
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
      ],
    };
  },
}));

test('ShipInfo renders ShipDetailsCard when ship is found', () => {
  const shipId = 1;

  const { getByTestId } = render(
    <MemoryRouter initialEntries={[`/ships/${shipId}`]}>
      <Routes>
        <Route path='/ships/:shipId' element={<ShipInfo />} />
      </Routes>
    </MemoryRouter>,
  );

  expect(getByTestId(`ship-${shipId}`)).toBeInTheDocument();
});

test('ShipInfo navigates to /error when ship is not found', () => {
  const shipId = 999;

  const { getByText } = render(
    <MemoryRouter initialEntries={[`/ships/${shipId}`]}>
      <Routes>
        <Route path='/ships/:shipId' element={<ShipInfo />} />
        <Route path='/error' element={<div>Error Page</div>} />
      </Routes>
    </MemoryRouter>,
  );

  const errorPage = getByText('Error Page');
  expect(errorPage).toBeInTheDocument();
});
