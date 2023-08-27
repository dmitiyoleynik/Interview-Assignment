import renderer from 'react-test-renderer';

import ShipListPagination from 'src/components/shipList/pagination';

test('ShipListPagination should match snapshot', () => {
  const props = { count: 1, currentPage: 1, handleChangePage: jest.fn };

  const component = renderer.create(<ShipListPagination {...props} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
