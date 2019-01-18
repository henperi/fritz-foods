import React, { Component } from 'react';
import { NavLink, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/userActions';

class Header extends Component {
  state = {};

  handleLogout = (event) => {
    event.preventDefault();

    const { logoutUser: dispatchLogout, history, user } = this.props;
    dispatchLogout();

    // localStorage.removeItem('userToken');
    // localStorage.removeItem('userId');
    // localStorage.removeItem('fullname');
    // localStorage.removeItem('role');
    // console.log(this.props, '====');
    // if (!user.isAuthenticated) return <Redirect to="/signin" />;
    // history.push('/signin');
  };

  render() {
    console.log('insideHeader', this.props);
    const { user } = this.props;

    const guestNav = (
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
          <i className="fa fa-shopping-cart" />
          <span className="count cart-count">0</span>
        </NavLink>
        <a
          onClick={(e) => {
            e.preventDefault();
          }}
          href="/"
          className="icon"
        >
          &#9776;
        </a>
      </div>
    );
    const userNav = (
      <div className="right-nav">
        <NavLink to="/users/foods" activeClassName="active">
          Foods Menu
        </NavLink>
        <div className="dropdown">
          <button type="button" className="dropbtn">
            My Orders
            <i className="fa fa-caret-down" />
          </button>
          <div className="dropdown-content">
            <NavLink to="/pending-orders.html">Pending Orders</NavLink>
            <NavLink to="/completed-orders.html">Completed Orders</NavLink>
            <NavLink className="all-orders.html" to="/all-orders.html">
              All My Orders
            </NavLink>
          </div>
        </div>
        <NavLink to="/my-profile.html" className="">
          My Profile
        </NavLink>
        <NavLink className="btn btn-green" to="/my-cart.html">
          My Cart
          <i className="fa fa-shopping-cart" />
          <span className="count cart-count">0</span>
        </NavLink>
        <a onClick={this.handleLogout} href="/" className="btn-rounded logout">
          Logout
        </a>
        <a
          onClick={(e) => {
            e.preventDefault();
          }}
          href="/"
          className="icon"
        >
          &#9776;
        </a>
      </div>
    );
    const adminNav = (
      <div className="right-nav">
        <NavLink to="foods.html" className="active">
          Foods Menu
        </NavLink>
        <div className="dropdown">
          <button type="button" className="dropbtn">
            Orders
            <i className="fa fa-caret-down" />
          </button>
          <div className="dropdown-content">
            <NavLink to="pending-orders.html">Pending Orders</NavLink>
            <NavLink to="completed-orders.html">Completed Orders</NavLink>
            <NavLink className="all-orders.html" to="all-orders.html">
              All Orders
            </NavLink>
          </div>
        </div>
        <NavLink to="my-profile.html" className="">
          My Profile
        </NavLink>
        <a onClick={this.handleLogout} href="/" className="btn-rounded logout">
          Logout
        </a>
        <a
          onClick={(e) => {
            e.preventDefault();
          }}
          href="/"
          className="icon"
        >
          &#9776;
        </a>
      </div>
    );

    let nav = guestNav;
    if (user.isAuthenticated) {
      user.role === 'admin' ? (nav = adminNav) : (nav = userNav);
    }
    // if (!user.isAuthenticated) return <Redirect to="/signin" />;
    return (
      <header>
        <nav className="topnav" id="myTopnav">
          <div className="left-nav">
            <Link to="/" className="brand">
              Fast Food Fast
            </Link>
          </div>
          {nav}
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(
  mapStateToProps,
  { logoutUser },
)(Header);
