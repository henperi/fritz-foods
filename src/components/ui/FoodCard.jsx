import React from 'react';
import { Link } from 'react-router-dom';

export const DefaultFood = () => (
  <div className="food-item card card-shadow">
    <div className="flex">
      <div className="image-div">
        <img alt="" src=" ../img/food-items/1.jpg" className="image" width="100%" />
      </div>
      <div className="content-div">
        <div className="item-title">
          Chicken Stew and Rice -
          <span className="badge price">&#8358;3,500</span>
        </div>
        <div className="item-subtitle">
          <Link to="/">Cooked Foods</Link>
        </div>
        <div className="item-description">
          qwewdsc asdfefedv ewdscvev dsfedv ewdvewv svewvfd ewfsfev fvdcvev vre
        </div>
        <span className="item-description link">More Details</span>
      </div>
    </div>
    <div>
      <a href="order-now.html">
        <button type="button" className="btn btn-primary">
          Order Now
        </button>
      </a>
      <button type="button" className="triggerModal btn btn-blue" data-target="cartModal">
        Add to Cart
      </button>

      <div className="modal" id="#cartModal">
        <div className="modal-content">
          <div className="text-center">
            <span className="close-button btn btn-primary btn-sm push-right">x</span>
            <h2 className="text-center">Add this food item to existing Cart</h2>

            <div className="content-div">
              <div className="item-title">
                Chicken Stew and Rice -
                <span className="badge price">&#8358;3,500</span>
              </div>
              <div className="item-description">
                <p>
                  qwewdsc asdfefedv ewdscvev dsfedv ewdvewv svewvfd ewfsfev fvdcvev vre asc eqwewdsc
                  asdfefedv ewdscvev dsfedv ewdvewv svewvfd ewfsfev fvdcvev vres
                </p>
              </div>
            </div>
            <form onSubmit={() => {}} method="POST" className=" card card-shadow">
              <div className="flex">
                <h2>Desired Quantity</h2>
                <div className="form-member text-left">
                  <input
                    type="number"
                    className="form-input"
                    placeholder="Enter Desired Quantity example 3"
                  />
                </div>
                <button type="button" className="btn btn-blue btn-block btn-rounded btn-bg">
                  Add To Cart
                </button>
              </div>
            </form>
            <button
              type="button"
              className="close-button btn btn-primary btn-block btn-rounded btn-bg"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const AdminFood = () => {};
