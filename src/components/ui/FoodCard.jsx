import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import TriggerModal from './TriggerModal';

export const DefaultFood = props => (
  <div className="food-item card card-shadow">
    <div className="flex">
      <div className="image-div">
        <img alt="" src="../img/food-items/1.jpg" className="image" width="100%" />
      </div>
      <div className="content-div">
        <div className="item-title">
          {props.food_name}
          <span className="badge price">
              &#8358;
            {props.unit_price}
          </span>
        </div>
        <div className="item-subtitle">
          <Link to="/">{props.food_cat}</Link>
        </div>
        <div className="item-description">{props.description}</div>
        <span className="item-description link">More Details</span>
      </div>
    </div>
    <div>
      <NavLink to={`/users/foods/${props.food_id}`} className="btn btn-primary">
          Order Now
      </NavLink>

      <TriggerModal
        type="addToCart"
        id={props.food_id}
        title={props.food_name}
        price={props.unit_price}
        triggerClass="btn btn-blue"
        triggerName="Add To Cart"
        {...props}
      />
    </div>
  </div>
);

export const AdminFood = () => {};
