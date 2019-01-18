import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';

test('should render Modal correctly', () => {
  const wrapper = shallow(<Modal />);
  expect(wrapper).toMatchSnapshot();
});
