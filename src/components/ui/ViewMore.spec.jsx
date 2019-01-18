import React from 'react';
import { shallow } from 'enzyme';
import { ViewMore1, ViewMore2 } from './ViewMore';

test('should render ViewMore1 correctly', () => {
  const wrapper = shallow(<ViewMore1 />);
  expect(wrapper).toMatchSnapshot();
});
test('should render ViewMore2 correctly', () => {
  const wrapper = shallow(<ViewMore2 />);
  expect(wrapper).toMatchSnapshot();
});
