import React from 'react';

import { NavLink } from 'react-router-dom';

const Hero = () => (
  <div className="hero">
    <div className="contain text-center">
      <h1 className="">Welcome To Fast Food Fast</h1>
      <p>
        The best food ordering app. Order afordable food items, drinks, pastries and African dishes
        to your door step instantly!
      </p>
      <form className="form-data" method="GET">
        <div className="form-member">
          <input
            type="text"
            name="search"
            className="form-input transparent text-center hero-input"
            placeholder="Search foods and dishes"
          />
          <button type="button" name="search" className="btn btn-primary">
            Search Food
          </button>
          <NavLink to="/users/foods" className="btn btn-blue">
            Our Menu
          </NavLink>
        </div>
      </form>
    </div>
  </div>
);

export default Hero;
