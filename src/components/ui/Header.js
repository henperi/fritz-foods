import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav className="topnav" id="myTopnav">
      <div className="left-nav">
        <Link to="/" className="brand">
          Fast Food Fast
        </Link>
      </div>
      <div className="right-nav">
        <NavLink to="/users/foods" className="">
          Foods Menu
        </NavLink>
        <NavLink to="#about">About Us</NavLink>
        <NavLink to="#contact">Contact Us</NavLink>
        <NavLink to="/signin" className="">
          Signin
        </NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink className="btn btn-green" to="/users/my-cart">
          My Cart
          <i className="fa fa-shopping-cart" />{" "}
          <span className="count cart-count">0</span>
        </NavLink>
        <a href="javascript:void(0);" className="icon">
          &#9776;
        </a>
      </div>
    </nav>
  </header>
);

export default Header;
