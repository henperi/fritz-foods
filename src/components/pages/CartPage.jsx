import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../ui/Header';
import Footer from '../ui/Footer';
import TriggerModal from '../ui/TriggerModal';

export const CartPage = (props) => {
  const { cart, user } = props;
  let total = 0;

  const renderCartItems = cart.map((item, index) => {
    total += item.unitPrice * item.quantity;

    return (
      <Fragment key={item.foodId}>
        <tr id={item.foodId} key={item.foodId}>
          <td>{item.name}</td>
          <td>
            &#8358;
            {item.unitPrice}
          </td>
          <td>
            <button type="button" className="hide btn-sm">
              -
            </button>
            {item.quantity}
            <button type="button" className="hide btn-sm">
              +
            </button>
          </td>
          <td>
            &#8358;
            {item.unitPrice * item.quantity}
          </td>
          <td className="">
            <TriggerModal
              type="removeFromCart"
              id={item.foodId}
              title={item.name}
              price={item.unitPrice * item.quantity}
              triggerClass="btn btn-red btn-sm"
              triggerName="Remove Item"
              {...props}
            />
          </td>
        </tr>
        {cart.length === index + 1 && (
          <tr id="#total">
            <td>
              <h2>Total</h2>
            </td>
            <td />
            <td />
            <td>
              <h2>
                &#8358;
                <span className="show-total">{total}</span>
              </h2>
            </td>
            <td className="" />
          </tr>
        )}
      </Fragment>
    );
  });

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
                <span className="cart-count">{cart.length}</span>
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
                  <tbody>{renderCartItems}</tbody>
                </table>
              </div>
            </div>
            <div className="text-center contain-50">
              <div className="response-area" />
              <div className="hide loader">
                <i className="fa fa-spinner fa-spin" />
              </div>
              {/* cart.length > 0
                && (user.isAuthenticated ? (
                  <TriggerModal
                    type="placeOrderModal"
                    triggerClass="btn btn-green btn-bg btn-rounded btn-block"
                    triggerName="Place Order"
                    {...props}
                  />
                ) : (
                  <span className="text-red">Please login to place your order</span>
                )) */}
              {cart.length > 0 ? (
                <TriggerModal
                  type="placeOrderModal"
                  triggerClass="btn btn-green btn-bg btn-rounded btn-block"
                  triggerName="Place Order"
                  {...props}
                />
              ) : (
                <h4 className="text-red">
                  Your cart is empty! Add items from the menu and come back here.
                </h4>
              )}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cart,
  user: state.user,
});

export default connect(mapStateToProps)(CartPage);
