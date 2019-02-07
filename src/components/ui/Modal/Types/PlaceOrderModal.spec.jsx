import React from 'react';
import { shallow } from 'enzyme';
import PlaceOrderModal from './PlaceOrderModal';

test('should render Modal correctly', () => {
  const wrapper = shallow(<PlaceOrderModal />);
  expect(wrapper).toMatchSnapshot();
});
