import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ConnectedHeader, { Header } from './Header';
import { logoutUser } from '../../actions/userActions';

test('should render Header correctly', () => {
  const Connectedwrapper = shallow(<ConnectedHeader />);
  expect(Connectedwrapper).toMatchSnapshot();
});

describe('The Header Component Test Suite', () => {
  const wrapper = shallow(
    <Header
      cart={[]}
      order={{ orderHistory: [] }}
      match={{ params: {} }}
      user={{}}
      logoutUser={logoutUser}
    />,
  );
  it('should render the <OrderHistory /> Component', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Header)).toBeDefined();
  });

  it('should call the handleAddToCart', () => {
    const event = { preventDefault: () => {} };
    wrapper.instance().handleLogout(event);
    expect(sinon.stub(jest.fn(wrapper.instance().props.logoutUser()))).not.toHaveBeenCalled();
    // expect(
    //   sinon.stub(jest.fn(wrapper.instance().props.actions(reportArticle()))),
    // ).toHaveBeenCalled();
    // expect(wrapper.instance().state.reportType).toEqual(event.target.value);
  });
});
