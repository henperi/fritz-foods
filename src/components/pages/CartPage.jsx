import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../ui/Header';
import Footer from '../ui/Footer';
import { fetchCartItems } from '../../actions/cartActions';

class CartPage extends Component {
  state = {
    cart: [],
    cartItems: [],
  };

  componentWillMount() {
    const { fetchCartItems: dispatchFetchCartItems, cart } = this.props;
    console.log('=====', cart);
    dispatchFetchCartItems(cart);
  }

  componentWillReceiveProps(nextProps) {
    nextProps.cart && this.setState({ cart: nextProps.cart });
    console.log('=====', nextProps.cart);
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <Header />
        <main className="main-content">
          <section className="m-t-40 text-center">
            <h2 className="setup-page hide t-40">
              Loading...
              <i className="fa fa-spin fa-spinner" />
            </h2>
          </section>

          <div className="container hideX">
            <section className="card text-center">
              <h2 className="">
                My Cart
                <Link className="link" to="/users/my-cart">
                  (
                  <span className="cart-count">2</span>
                  Items)
                </Link>
              </h2>
              <div className="card card-shadow">
                <div className="table">
                  <table>
                    <thead className="">
                      <tr>
                        <th>Food Name</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody />
                  </table>
                </div>
              </div>
              <div className="text-center contain-50">
                <div className="response-area" />
                <div className="hide loader">
                  <i className="fa fa-spinner fa-spin" />
                </div>
                <button
                  type="button"
                  className="btn btn-green btn-bg btn-rounded btn-block triggerModal placeOrderModal"
                  data-target="placeOrderModal"
                >
                  Place Order
                </button>

                <div className="modal" id="#placeOrderModal">
                  <div className="modal-content">
                    <div className="text-center">
                      <span className="close-button btn btn-primary btn-sm push-right">x</span>
                      <h2 className="text-center">You are about to place an order</h2>
                      <form onSubmit={() => {}} method="POST" className=" card card-shadow">
                        <div className="">
                          <h3>Are you sure you want to order all the items in cart?</h3>
                          <button
                            type="button"
                            className="btn btn-green btn-rounded btn-bg place-order"
                          >
                            Proceed
                          </button>
                          <button
                            type="button"
                            className="close-button btn btn-primary btn-rounded btn-bg"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  cartItems: state.cartItems,
});

export default connect(
  mapStateToProps,
  { fetchCartItems },
)(CartPage);
