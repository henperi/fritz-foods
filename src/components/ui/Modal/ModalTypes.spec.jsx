import React from 'react';
import { shallow } from 'enzyme';
import { AddToCartModal, RemoveFromCartModal, mapStateToProps } from './ModalTypes';

test('should render ModalTypes correctly', () => {
  const wrapper = shallow(<AddToCartModal />);
  expect(wrapper).toMatchSnapshot();
});
test('should render ModalTypes correctly', () => {
  const wrapper = shallow(<RemoveFromCartModal />);
  expect(wrapper).toMatchSnapshot();
});

/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
// import { shallow } from 'enzyme';
// import { PlaceOrderModal } from './PlaceOrderModal';

describe('rendering', () => {
  let wrapper;
  let props;
  // let mockedSignUpState;
  beforeEach(() => {
    props = {
      handleModal: jest.fn(),
      handleAddToCart: jest.fn(),
      removeFromCart: jest.fn(),
      cart: [],
      placeOrder: jest.fn(),
    };
  });

  it('should render AddToCartComponent the component', () => {
    wrapper = shallow(<AddToCartModal {...props} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.length).toBe(1);
  });

  it('should test the handleAddToCart btn function click', () => {
    const fakeEvent = { preventDefault: () => 'preventDefault' };
    wrapper = shallow(<AddToCartModal {...props} />);
    const addToCart = wrapper.find('.btn-blue');
    addToCart.simulate('click', fakeEvent);
    const handleAddToCart = jest.fn(props.cart);
    const promise = new Promise((resolve) => {
      resolve(wrapper.instance().onSubmit);
    });
    promise.then(() => expect(handleAddToCart).toHaveBeenCalledTimes(1));
  });

  it('should test mapStateToProps', () => {
    const state = mapStateToProps(props);
    expect(state).toBeTruthy();
  });
});
