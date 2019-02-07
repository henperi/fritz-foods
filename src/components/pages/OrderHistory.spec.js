/* eslint-disable no-undef */
import React from 'react';
import sinon from 'sinon';
import { Fragment } from 'react';
import { OrderHistory } from './OrdersHistory';
import { getOrderHistory } from '../../actions/orderActions';
import LoadingSpinner from '../ui/LoadingSpinner';
// import { loginUser } from '../../actions/userActions';
// import SignupForm from './SignupForm';

describe('The OrderHistory Component Test Suite', () => {
  const wrapper = shallow(
    <OrderHistory
      getOrderHistory={getOrderHistory}
      order={{ orderHistory: [] }}
      match={{ params: {} }}
      user={{}}
    />,
  );
  it('should render the <OrderHistory /> Component', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(OrderHistory)).toBeDefined();
  });

  // it('should call the handleAddToCart', () => {
  //   wrapper.instance().handleAddToCart({ id: 5, name: 'Rice', price: 500 });
  //   expect(sinon.stub(jest.fn(wrapper.instance().props.addToCart()))).not.toHaveBeenCalled();
  //   // expect(
  //   //   sinon.stub(jest.fn(wrapper.instance().props.actions(reportArticle()))),
  //   // ).toHaveBeenCalled();
  //   // expect(wrapper.instance().state.reportType).toEqual(event.target.value);
  // });
});
