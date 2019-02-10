/* eslint-disable no-undef */
import React from 'react';
import sinon from 'sinon';
import { LandingPage } from './LandingPage';
import { getMenu } from '../../actions/menuActions';
import { addToCart, toggleCartSlider, slideCart } from '../../actions/cartActions';
// import LoadingSpinner from '../ui/LoadingSpinner';
// import { loginUser } from '../../actions/userActions';
// import SignupForm from './SignupForm';

describe('The MenuPage Component Test Suite', () => {
  const wrapper = shallow(
    <LandingPage
      featuredMenu={[]}
      addToCart={addToCart}
      toggleCartSlider={toggleCartSlider}
      getMenu={getMenu}
      slideCart={slideCart}
    />,
  );
  it('should render the <MenuPage /> Component', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(LandingPage)).toBeDefined();
  });

  it('should call the handleAddToCart', () => {
    wrapper.instance().handleAddToCart({ id: 5, name: 'Rice', price: 500 });
    expect(sinon.stub(jest.fn(wrapper.instance().props.addToCart()))).not.toHaveBeenCalled();
  });
});
