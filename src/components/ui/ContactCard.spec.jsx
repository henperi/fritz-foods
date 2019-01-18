import React from 'react';
import { shallow } from 'enzyme';
import ContactCard from './ContactCard';

test('should render Header correctly', () => {
  const wrapper = shallow(<ContactCard />);
  expect(wrapper).toMatchSnapshot();
});
