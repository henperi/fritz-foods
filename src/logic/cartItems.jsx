import React, { Fragment } from 'react';
import TriggerModal from '../components/ui/TriggerModal';

let total = 0;
export const renderCartItems = (cart, props) => cart.map((item, index) => {
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

export const renderAnything = () => {};
