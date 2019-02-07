/* eslint-disable no-undef */
import React from 'react';
import sinon from 'sinon';
import { MenuPage } from './MenuPage';
import { getMenu } from '../../actions/menuActions';
import { addToCart, toggleCartSlider } from '../../actions/cartActions';
import LoadingSpinner from '../ui/LoadingSpinner';
// import { loginUser } from '../../actions/userActions';
// import SignupForm from './SignupForm';

describe('The MenuPage Component Test Suite', () => {
  const wrapper = shallow(
    <MenuPage getMenu={getMenu} addToCart={addToCart} toggleCartSlider={toggleCartSlider} />,
  );
  it('should render the <MenuPage /> Component', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(MenuPage)).toBeDefined();
  });

  it('should call the handleAddToCart', () => {
    wrapper.instance().handleAddToCart({ id: 5, name: 'Rice', price: 500 });
    expect(sinon.stub(jest.fn(wrapper.instance().props.addToCart()))).not.toHaveBeenCalled();
    // expect(
    //   sinon.stub(jest.fn(wrapper.instance().props.actions(reportArticle()))),
    // ).toHaveBeenCalled();
    // expect(wrapper.instance().state.reportType).toEqual(event.target.value);
  });

  it('should render exactly one form tag', () => {
    expect(wrapper.find(LoadingSpinner)).toHaveLength(1);
  });
  // it('should render exactly two input tags', () => {
  //   expect(wrapper.find('input')).toHaveLength(2);
  // });
});
