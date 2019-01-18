import React from 'react';
import { shallow } from 'enzyme';
import LoadingSpinner from './LoadingSpinner';

test('should render LoadingSpinner correctly', () => {
  const wrapper = shallow(<LoadingSpinner />);
  expect(wrapper).toMatchSnapshot();
});
