import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import ErrorPage from 'src/pages/errorPage';

test('ShipDetailsCard should match snapshot', () => {
  const component = renderer.create(
    <MemoryRouter>
      <ErrorPage />
    </MemoryRouter>,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
