import renderer from 'react-test-renderer';

import HeadBand from 'src/components/shipList/headBand';

test('HeadBand should match snapshot', () => {
  const component = renderer.create(<HeadBand />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
