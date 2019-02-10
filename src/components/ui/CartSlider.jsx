import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const CartSlider1 = (props) => {
  const { cart, slideCart } = props;
  return (
    <div className={`cart card-shadow text-center ${slideCart.slide && 'slide-from-right'}`}>
      <div className="right-nav close-button">
        <i className="fa fa-close" />
      </div>
      <br />
      <div className="container">
        My Cart
        {' '}
        <i className="fa fa-shopping-cart" />
      </div>
      <div className="card text-inverse">
        <span className="cart-count">
          {cart.length}
          {' '}
        </span>
        Items added
      </div>
      <div className="container">
        <Link to="/users/my-cart" className="btn btn-sm btn-green">
          View
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cart,
  slideCart: state.slideCart,
});

export default connect(mapStateToProps)(CartSlider1);
