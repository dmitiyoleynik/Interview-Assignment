import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import { Ship } from 'src/utils/types';
import ShipList from 'src/components/shipList/shipList';

test('ShipList should match snapshot with zero ship', () => {
  const component = renderer.create(
    <MemoryRouter>
      <ShipList ships={[]} />
    </MemoryRouter>,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('ShipList should match snapshot with one ship', () => {
  const ships: Ship[] = [
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
  ];
  const component = renderer.create(
    <MemoryRouter>
      <ShipList ships={ships} />
    </MemoryRouter>,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('ShipList should match snapshot with many ships', () => {
  const ships: Ship[] = [
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
  ];
  const component = renderer.create(
    <MemoryRouter>
      <ShipList ships={ships} />
    </MemoryRouter>,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
