import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../ui/Header';
import Footer from '../ui/Footer';
import { DefaultFood } from '../ui/FoodCard';
import Hero from '../ui/Hero';
import AboutCard from '../ui/AboutCard';
import ContactCard from '../ui/ContactCard';
import { getMenu } from '../../actions/menuActions';
import { addToCart, toggleCartSlider } from '../../actions/cartActions';

export class LandingPage extends Component {
  state = {};

  componentDidMount() {
    const { getMenu: dispatchGetMenu } = this.props;
    dispatchGetMenu();
  }

  componentWillReceiveProps(nextProps) {
    nextProps.menu && this.setState({ ...nextProps.menu });
    nextProps.cart && this.setState({ cart: nextProps.cart });
  }

  handleAddToCart = (id, name, price) => {
    const {
      addToCart: dispatchAddToCart,
      toggleCartSlider: dispatchToggleCartSlidder,
    } = this.props;

    dispatchAddToCart(id, name, price);
    dispatchToggleCartSlidder();
  };

  render() {
    const { featuredMenu } = this.props;
    return (
      <div>
        <Header />
        <main>
          <Hero />
          <div className="p-h-5 text-center">
            <p>
              To enjoy amazing discounts and have a fun filled experience, login to your account!
            </p>
            <div>
              <Link to="/signin" className="btn btn-green">
                Login Now
              </Link>
              <Link to="/signup" className="btn btn-blue">
                Signup Now
              </Link>
            </div>
          </div>

          <div className="containerX">
            <section>
              <h2 className="text-center">Todays Featured Foods</h2>
              <div className="container food-menu">
                {featuredMenu.map(singleFood => (
                  <DefaultFood
                    key={singleFood.food_id}
                    {...singleFood}
                    handleAddToCart={this.handleAddToCart}
                  />
                ))}
              </div>
            </section>

            <section>
              <div className="card text-center">
                <h2>Wanna See Our Menu And All Food Items?</h2>
                <p>
                  <a href="users/foods.html" className="btn btn-blue btn-rounded btn-bg">
                    View Menu
                  </a>
                </p>
              </div>
              <div className="text-center">
                <p>
                  <a href="signin.html" className="btn btn-green">
                    Login Now!
                  </a>
                  <a href="signup.html" className="btn btn-blue">
                    Signup Now!
                  </a>
                </p>
              </div>
            </section>

            <section className="flex-h text-center">
              <AboutCard />
              <ContactCard />
            </section>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  featuredMenu: state.featuredMenu,
  cart: state.cart,
});

export default connect(
  mapStateToProps,
  { getMenu, addToCart, toggleCartSlider },
)(LandingPage);
