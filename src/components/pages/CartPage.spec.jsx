import React from 'react';
import { shallow } from 'enzyme';
import CartPage from './CartPage';

test('should render CartPage correctly', () => {
  const wrapper = shallow(<CartPage />);
  expect(wrapper).toMatchSnapshot();
});
