import React from 'react';
import { shallow } from 'enzyme';
import { DefaultFood } from './FoodCard';

test('should render Header correctly', () => {
  const wrapper = shallow(<DefaultFood />);
  expect(wrapper).toMatchSnapshot();
});
