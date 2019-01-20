import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../../actions/cartActions';

export const AddToCartModal = (props) => {
  const {
    id, title, price, description, food_name, handleModal,
  } = props;
  // console.log('insideAddToCart', props);
  return (
    <div>
      <h2 className="text-center">Add this food item to existing Cart</h2>
      <div className="content-div">
        <div className="item-title">
          {title}
          <span className="badge price">
            &#8358;
            {price}
          </span>
        </div>
        <div className="item-description">
          <p>{description}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => props.handleAddToCart(id, food_name, price)}
        className="btn btn-blue btn-block btn-rounded btn-bg"
      >
        Add To Cart
      </button>

      <button
        onClick={handleModal}
        type="button"
        className="close-button btn btn-primary btn-block btn-rounded btn-bg"
      >
        Cancel
      </button>
    </div>
  );
};

const RemoveFromCart = (props) => {
  const {
    title, price, description, handleModal, id,
  } = props;
  return (
    <div>
      <h2 className="text-center">Remove this food item from existing Cart</h2>
      <div className="content-div">
        <div className="item-title">
          {title}
-
          <span className="badge price">
            &#8358;
            {price}
          </span>
        </div>
        <div className="item-description">
          <p>{description}</p>
        </div>
      </div>

      <button
        onClick={() => {
          props.removeFromCart(id);
        }}
        type="button"
        className="btn btn-red btn-block btn-rounded btn-bg"
      >
        Remove From Cart
      </button>

      <button
        onClick={handleModal}
        type="button"
        className="close-button btn btn-primary btn-block btn-rounded btn-bg"
      >
        Cancel
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cart,
});

export const RemoveFromCartModal = connect(
  mapStateToProps,
  { removeFromCart },
)(RemoveFromCart);

export const SignUpModal = (props) => {
  const { handleModal } = props;

  return (
    <div>
      <h2 className="text-center">Signup Now</h2>
      <div className="content-div">
        <div className="item-description">
          <input />
        </div>
      </div>
      <span>
        <button type="button" className="btn btn-green btn-blockX btn-rounded btn-bg">
          Sign Up
        </button>

        <button
          onClick={handleModal}
          type="button"
          className="close-button btn btn-default btn-blockX btn-rounded btn-bg"
        >
          Cancel
        </button>
      </span>
    </div>
  );
};
