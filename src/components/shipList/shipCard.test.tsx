import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import ShipCard from 'src/components/shipList/shipCard';

test('ShipCard should match snapshot', () => {
  const props = {
    ship: {
      id: 2,
      built: 2017,
      name: 'OOCL Germany',
      lengthMeters: 399.87,
      beamMeters: 58.8,
      maxTEU: 21413,
      owner: 'OOCL (Hong Kong)',
      grossTonnage: 210890,
    },
  };

  const component = renderer.create(
    <MemoryRouter>
      <ShipCard {...props} />
    </MemoryRouter>,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
