import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../ui/Header';
import Footer from '../ui/Footer';
import TriggerModal from '../ui/TriggerModal';
import { getOrderedItems } from '../../actions/orderActions';
import { formatDate } from '../../helpers/formaters';

export class OrderItems extends PureComponent {
  componentDidMount() {
    const { getOrderedItems, user, match } = this.props;
    getOrderedItems(user.userId, match.params.orderId);
  }

  render() {
    const {
      order: { orderedItems = [] },
    } = this.props;
    // console.log(orderedItems);

    const renderOrderedItems = orderedItems.map((item, index) => (
      <Fragment key={item.item_id}>
        <tr>
          <td>{item.food_name}</td>
          <td>
            &#8358;
            {`${item.unit_price}`}
          </td>
          <td>{item.quantity.split('.')[0]}</td>
          <td>
            &#8358;
            {`${item.total}`}
          </td>
          <td>{formatDate(item.created_at)}</td>
          <td className={`text-${item.itemstatus}`}>{item.itemstatus}</td>
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
              <h2 className="">Ordered Items</h2>
              <div className="card card-shadow">
                <div className="table">
                  <table>
                    <thead className="">
                      <tr>
                        <th>Food Name</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th>Date Ordered</th>
                        <th>Item Status</th>
                      </tr>
                    </thead>
                    {/* <tbody>{renderOrderItems}</tbody>
                     */}
                    <tbody>{renderOrderedItems}</tbody>
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
  order: state.order,
  user: state.user,
});

export default connect(
  mapStateToProps,
  { getOrderedItems },
)(OrderItems);
