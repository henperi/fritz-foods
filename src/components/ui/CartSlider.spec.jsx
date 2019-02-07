import React from 'react';
import { shallow } from 'enzyme';
import { CartSlider1 } from './CartSlider';

test('should render CartSlider correctly', () => {
  const wrapper = shallow(<CartSlider1 cart={[]} />);
  expect(wrapper).toMatchSnapshot();
});
