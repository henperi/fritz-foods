import React, { PureComponent, Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/userActions';

class Header extends PureComponent {
  handleLogout = (event) => {
    event.preventDefault();

    const { logoutUser: dispatchLogout, history, user } = this.props;
    dispatchLogout();

    localStorage.removeItem('userToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('fullname');
    localStorage.removeItem('role');
  };

  toggleNav = (event) => {
    event.preventDefault();
  };

  toggleNav = (event) => {
    event.preventDefault();
    return (
      event.target.parentElement.parentElement.classList.contains('topnav')
      && event.target.parentElement.parentElement.classList.toggle('responsive')
    );
  };

  render() {
    const { user, cart } = this.props;
    const cartCount = cart.length;

    const IndexLinks = `${window.origin}/` === window.location.href && (
      <Fragment>
        <NavLink to="#about">About Us</NavLink>
        <NavLink to="#contact">Contact Us</NavLink>
      </Fragment>
    );

    const guestNav = (
      <div className="right-nav">
        <NavLink to="/users/foods" className="">
          Foods Menu
        </NavLink>
        {IndexLinks}

        <NavLink to="/signin" className="">
          Signin
        </NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink className="btn btn-green" to="/users/my-cart">
          My Cart
          <i className="fa fa-shopping-cart" />
          {' '}
          <span className="count cart-count">{cartCount}</span>
        </NavLink>
        <a
          onClick={(e) => {
            this.toggleNav(e);
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
        {IndexLinks}
        <div className="dropdown">
          <NavLink to="/users/my-orders" activeClassName="active">
            My Orders
          </NavLink>

          {/*
            <div className="dropdown-content">
            <NavLink to="/pending-orders">Pending Orders</NavLink>
            <NavLink to="/completed-orders">Completed Orders</NavLink>
            <NavLink to="/all-orders">All My Orders</NavLink>
            </div>
          */}
        </div>
        {/*        <NavLink to="/my-profile" className="">
          My Profile
        </NavLink> */}
        <NavLink className="btn btn-green" to="/users/my-cart">
          My Cart
          <i className="fa fa-shopping-cart" />
          {' '}
          <span className="count cart-count">{cartCount}</span>
        </NavLink>
        <a onClick={this.handleLogout} href="/logout" className="btn-rounded logout">
          Logout
        </a>
        <a
          onClick={(e) => {
            this.toggleNav(e);
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
        <NavLink to="/admins/foods" className="active">
          Foods Menu
        </NavLink>
        {IndexLinks}
        <div className="dropdown">
          <button type="button" className="dropbtn">
            Orders
            <i className="fa fa-caret-down" />
          </button>
          <div className="dropdown-content">
            <NavLink to="/admins/pending-orders">Pending Orders</NavLink>
            <NavLink to="/admins/completed-orders">Completed Orders</NavLink>
            <NavLink to="/admins/all-orders">All Orders</NavLink>
          </div>
        </div>
        <NavLink to="/admins/my-profile" className="">
          My Profile
        </NavLink>
        <a onClick={this.handleLogout} href="/" className="btn-rounded logout">
          Logout
        </a>
        <a
          onClick={(e) => {
            this.toggleNav(e);
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
      nav = user.role === 'admin' ? adminNav : userNav;
    }
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
  cart: state.cart,
});

export default connect(
  mapStateToProps,
  { logoutUser },
)(Header);
