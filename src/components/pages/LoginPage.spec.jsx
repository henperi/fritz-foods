/* eslint-disable no-undef */
import React from 'react';
import sinon from 'sinon';
import { LoginPage } from './LoginPage';
import { loginUser } from '../../actions/userActions';
// import SignupForm from './SignupForm';

describe('The Signup Component Test Suite', () => {
  const user = {};
  const wrapper = shallow(<LoginPage loginUser={loginUser} user={user} />);
  it('should render the <SignupForm /> Component', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(LoginPage)).toBeDefined();
  });

  it('should handle input change event for email', () => {
    const event = {
      target: { name: 'email', value: 'henry.izontimi@gmail.com' },
      preventDefault: () => {},
    };

    wrapper.instance().onChange(event);
    expect(wrapper.state().email).toEqual('henry.izontimi@gmail.com');
    expect(wrapper.instance().state.email).toEqual(event.target.value);
  });

  it('should handle input change event for password', () => {
    const event = {
      target: { name: 'password', value: '12345qwe' },
      preventDefault: () => {},
    };

    wrapper.instance().onChange(event);
    expect(wrapper.state().password).toEqual('12345qwe');
    expect(wrapper.instance().state.password).toEqual(event.target.value);
  });

  it('should call the onSubmit', () => {
    const event = { preventDefault: () => {} };

    wrapper.instance().onSubmit(event);
    expect(wrapper.state().email).toEqual('henry.izontimi@gmail.com');
    expect(wrapper.state().password).toEqual('12345qwe');
    expect(sinon.stub(jest.fn(wrapper.instance().props.loginUser()))).not.toHaveBeenCalled();
    // expect(
    //   sinon.stub(jest.fn(wrapper.instance().props.actions(reportArticle()))),
    // ).toHaveBeenCalled();
    // expect(wrapper.instance().state.reportType).toEqual(event.target.value);
  });

  it('should render exactly one form tag', () => {
    expect(wrapper.find('form')).toHaveLength(1);
  });
  it('should render exactly two input tags', () => {
    expect(wrapper.find('input')).toHaveLength(2);
  });
});
