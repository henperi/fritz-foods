import React from 'react';
import { shallow } from 'enzyme';
import AboutCard from './AboutCard';

test('should render AboutCard correctly', () => {
  const wrapper = shallow(<AboutCard />);
  expect(wrapper).toMatchSnapshot();
});
