import React from 'react';
import { shallow } from 'enzyme';
import TriggerModal from './TriggerModal';

test('should render TriggerModal correctly', () => {
  const wrapper = shallow(<TriggerModal />);
  expect(wrapper).toMatchSnapshot();
});
