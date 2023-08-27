import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import ShipDetailsCard from 'src/components/shipDetailsCard';
import { Ship } from 'src/utils/types';

test('ShipDetailsCard should match snapshot', () => {
  const ship: Ship = {
    id: 3,
    built: 2017,
    name: 'OOCL Japan',
    lengthMeters: 399.87,
    beamMeters: 58.8,
    maxTEU: 21413,
    owner: 'OOCL (Hong Kong)',
    grossTonnage: 210890,
  };
  const component = renderer.create(
    <MemoryRouter>
      <ShipDetailsCard ship={ship} />
    </MemoryRouter>,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
