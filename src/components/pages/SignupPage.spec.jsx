/* eslint-disable no-undef */
import React from 'react';
import sinon from 'sinon';
import { SignupPage } from './SignupPage';
import { getOrderHistory } from '../../actions/orderActions';
import { signupUser } from '../../actions/userActions';
// import { loginUser } from '../../actions/userActions';
// import SignupForm from './SignupForm';

describe('The SignupPage Component Test Suite', () => {
  const wrapper = shallow(<SignupPage match={{ params: {} }} user={{}} signupUser={signupUser} />);
  it('should render the <OrderHistory /> Component', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(SignupPage)).toBeDefined();
  });

  it('should handle input change event for username', () => {
    const event = { target: { name: 'email', value: 'henry' }, preventDefault: () => {} };

    wrapper.instance().onChange(event);
    expect(wrapper.state().email).toEqual('henry');
    expect(wrapper.instance().state.email).toEqual(event.target.value);
  });

  it('should call the handleAddToCart', () => {
    const event = { preventDefault: () => {} };

    wrapper.instance().onSubmit(event);
    expect(sinon.stub(jest.fn(wrapper.instance().props.signupUser()))).not.toHaveBeenCalled();
    // expect(
    //   sinon.stub(jest.fn(wrapper.instance().props.actions(reportArticle()))),
    // ).toHaveBeenCalled();
    // expect(wrapper.instance().state.reportType).toEqual(event.target.value);
  });
});
