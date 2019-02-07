import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { TriggerModal } from './TriggerModal';

// test('should render TriggerModal correctly', () => {
//   const wrapper = shallow(<TriggerModal />);
//   expect(wrapper).toMatchSnapshot();
// });

describe('The Header Component Test Suite', () => {
  const wrapper = shallow(
    <TriggerModal cart={[]} order={{ orderHistory: [] }} match={{ params: {} }} user={{}} />,
  );
  it('should render the <TriggerModal /> Component', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(TriggerModal)).toBeDefined();
  });

  it('should call the handleModal', () => {
    // const event = { preventDefault: () => {} };
    wrapper.instance().handleModal();
    // expect(sinon.stub(jest.fn(wrapper.instance().props.logoutUser()))).not.toHaveBeenCalled();
    // expect(
    //   sinon.stub(jest.fn(wrapper.instance().props.actions(reportArticle()))),
    // ).toHaveBeenCalled();
    // expect(wrapper.instance().state.reportType).toEqual(event.target.value);
  });
});
