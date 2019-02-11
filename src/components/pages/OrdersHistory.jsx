import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../ui/Header';
import Footer from '../ui/Footer';
import TriggerModal from '../ui/TriggerModal';
import { getOrderHistory, cancelOrder } from '../../actions/orderActions';
import { formatDate } from '../../helpers/formaters';

export class OrderHistory extends PureComponent {
  componentDidMount() {
    const { getOrderHistory, user } = this.props;
    getOrderHistory(user.userId);
  }

  render() {
    const {
      order: { orderHistory },
      cancelOrder: dispatchCancelOrder,
    } = this.props;

    const renderOrderHistory = orderHistory.map((order, index) => (
      <Fragment key={order.order_id}>
        <tr>
          <td>
            <Link to={`/my-orders/${order.order_id}`} className="link">
              {`#${order.order_id.split('-')[0]}`}
            </Link>
          </td>
          <td>
            {order.ordered_items.quantity}
            {' '}
Item(s)
            <Link to={`/my-orders/${order.order_id}`} className="btn btn-sm btn-blue">
              View items
            </Link>
          </td>
          <td>
            &#8358;
            {order.total_mount}
          </td>
          <td>{formatDate(order.created_at)}</td>
          <td className={`text-${order.order_status.toLowerCase()}`}>{order.order_status}</td>
          <td className="">
            <button
              onClick={() => {
                dispatchCancelOrder(order.order_id);
              }}
              type="button"
              className="triggerModal btn btn-red btn-sm"
            >
              Cancel Order
            </button>
          </td>
        </tr>
      </Fragment>
    ));

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
                    {/* <tbody>{renderOrderHistory}</tbody> */}
                    <tbody>{renderOrderHistory}</tbody>
                    {/* orderHistory.length > 0 ? (
                    ) : (
                      <div>
                        <h2 className="text-center">No order history.</h2>
                      </div>
                    ) */}
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

export const mapStateToProps = state => ({
  order: state.order,
  user: state.user,
});

export default connect(
  mapStateToProps,
  { getOrderHistory, cancelOrder },
)(OrderHistory);
