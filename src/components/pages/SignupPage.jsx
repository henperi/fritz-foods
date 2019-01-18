import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { signupUser } from '../../actions/userActions';

class SignupPage extends Component {
  state = {
    email: '',
    password: '',
    passwordConfirmation: '',
    fullname: '',
    mobile: '',
    address: '',
    errors: [],
    isLoading: false,
  };

  componentWillMount() {
    this.props.user.isAuthenticated && this.props.history.push('/users/foods');
  }

  componentWillReceiveProps(nextProps) {
    return nextProps.errors && this.setState({ errors: nextProps.errors });
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });

    const {
      email, password, passwordConfirmation, fullname, mobile, address,
    } = this.state;

    const signupData = {
      email,
      password,
      passwordConfirmation,
      fullname,
      mobile,
      address,
    };

    const { signupUser: dispatchSignup, history } = this.props;

    dispatchSignup(signupData, history);
  };

  render() {
    const {
      email,
      password,
      passwordConfirmation,
      fullname,
      mobile,
      address,
      errors,
      isLoading,
    } = this.state;

    return (
      <div className="container">
        <div className="text-center contain-50">
          <div className="card card-shadow text-inverse">
            <h2>Create An Account To Get Started</h2>
            <p>It only takes a few seconds to signup, Lets get started!</p>

            <form className="form-data contain" onSubmit={this.onSubmit}>
              <div className="form-member text-left">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={email}
                  className="form-input email"
                  placeholder="Enter Your Email"
                  onChange={this.onChange}
                />
                {errors.map(
                  error => error.param === 'email' && (
                  <li key={`${error.param}-${Math.random()}`} className="list-item error">
                    {error.msg}
                  </li>
                  ),
                )}
              </div>
              <div className="form-member text-left">
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  value={password}
                  className="form-input password"
                  placeholder="Enter your password"
                  onChange={this.onChange}
                />
                {errors.map(
                  error => error.param === 'password' && (
                  <li key={`${error.param}-${Math.random()}`} className="list-item error">
                    {error.msg}
                  </li>
                  ),
                )}
              </div>
              <div className="form-member text-left">
                <span>Repeat Password</span>
                <input
                  type="password"
                  name="passwordConfirmation"
                  value={passwordConfirmation}
                  className="form-input passwordConfirmation"
                  placeholder="Repeat your password"
                  onChange={this.onChange}
                />
                {errors.map(
                  error => error.param === 'passwordConfirmation' && (
                  <li key={`${error.param}-${Math.random()}`} className="list-item error">
                    {error.msg}
                  </li>
                  ),
                )}
              </div>
              <div className="form-member text-left">
                <span>Fullname</span>
                <input
                  type="text"
                  name="fullname"
                  value={fullname}
                  className="form-input fullname"
                  placeholder="Enter Your Full Name"
                  onChange={this.onChange}
                />
                {errors.map(
                  error => error.param === 'fullname' && (
                  <li key={`${error.param}-${Math.random()}`} className="list-item error">
                    {error.msg}
                  </li>
                  ),
                )}
              </div>
              <div className="form-member text-left">
                <span>Mobile</span>
                <input
                  type="tel"
                  name="mobile"
                  value={mobile}
                  className="form-input mobile"
                  placeholder="Enter Your Mobile"
                  onChange={this.onChange}
                />
                {errors.map(
                  error => error.param === 'mobile' && (
                  <li key={`${error.param}-${Math.random()}`} className="list-item error">
                    {error.msg}
                  </li>
                  ),
                )}
              </div>
              <div className="form-member text-left">
                <span>Address</span>
                <input
                  type="text"
                  name="address"
                  value={address}
                  className="form-input address"
                  placeholder="Enter Your Home Address"
                  onChange={this.onChange}
                />
                {errors.map(
                  error => error.param === 'address' && (
                  <li key={`${error.param}-${Math.random()}`} className="list-item error">
                    {error.msg}
                  </li>
                  ),
                )}
              </div>
              <div className="form-member">
                <div className="response-area">
                  {errors.length === 1 && errors[0].msg && (
                    <li key={`${errors.length}-${Math.random()}`} className="list-item error">
                      {errors[0].msg}
                    </li>
                  )}
                </div>
                <div className={`loader ${isLoading ? '' : 'hide'}`}>
                  <i className="fa fa-spinner fa-spin" />
                </div>
                <button type="submit" name="signup" className="btn btn-blue btn-block signup">
                  Signup
                </button>
              </div>
              <p>
                Already have an account?
                <Link to="/signin" className="link">
                  Signin Instead
                </Link>
              </p>
            </form>
            <p>
              Go back home
              <Link to="/" className="link">
                Home
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  signupUser: PropTypes.func.isRequired,
  errors: PropTypes.array,
  history: PropTypes.object,
};

SignupPage.defaultProps = {
  errors: [],
};

const mapStateToProps = state => ({
  user: state.user,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { signupUser },
)(withRouter(SignupPage));
