import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../ui/Header';
import Footer from '../ui/Footer';
import TriggerModal from '../ui/TriggerModal';
import { getOrderHistory } from '../../actions/orderActions';

class OrderHistory extends PureComponent {
  componentDidMount() {
    const { getOrderHistory, user } = this.props;
    // console.log(user.userId);
    getOrderHistory(user.userId);
  }

  render() {
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
              <h2 className="">Orders History</h2>
              <div className="card card-shadow">
                <div className="table">
                  <table>
                    <thead className="">
                      <tr>
                        <th>Order Id</th>
                        <th>Ordered Items</th>
                        <th>Total Amount</th>
                        <th>Date Ordered</th>
                        <th>Order Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    {/* <tbody>{renderCartItems}</tbody> */}
                  </table>
                </div>
              </div>
              <div className="text-center contain-50">
                <div className="response-area" />
                <div className="hide loader">
                  <i className="fa fa-spinner fa-spin" />
                </div>
              </div>
              <div>
                <button type="button" className="btn btn-primary btn-rounded">
                  load more
                </button>
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
  ordersHistory: state.ordersHistory,
  user: state.user,
});

export default connect(
  mapStateToProps,
  { getOrderHistory },
)(OrderHistory);
