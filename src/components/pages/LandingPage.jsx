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
import { addToCart, toggleCartSlider, slideCart } from '../../actions/cartActions';
import toggleLoader from '../../actions/loaderAction';

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

  handleAddToCart = (id, name, price, handleModal) => {
    const {
      addToCart: dispatchAddToCart,
      toggleCartSlider: dispatchToggleCartSlidder,
      slideCart: dispatchSlideCart,
    } = this.props;

    dispatchAddToCart(id, name, price);
    dispatchToggleCartSlidder();
    dispatchSlideCart();

    setTimeout(() => {
      dispatchSlideCart();
    }, 2000);
    return handleModal && handleModal();
  };

  render() {
    const { featuredMenu, user = {} } = this.props;
    return (
      <div>
        <Header />
        <main className="main">
          <Hero />
          <div className="p-h-5 text-center">
            <p>
              To enjoy amazing discounts and have a fun filled experience, login to your account!
            </p>
            {!user.isAuthenticated && (
              <div>
                <Link to="/signin" className="btn btn-green">
                  Login Now
                </Link>
                <Link to="/signup" className="btn btn-blue">
                  Signup Now
                </Link>
              </div>
            )}
          </div>

          <div className="containerX">
            <section>
              <h2 className="text-center">Todays Featured Foods</h2>
              {featuredMenu.length > 0 ? (
                <div className="container food-menu">
                  {featuredMenu.map(singleFood => (
                    <DefaultFood
                      key={singleFood.food_id}
                      {...singleFood}
                      handleAddToCart={this.handleAddToCart}
                    />
                  ))}
                </div>
              ) : (
                <div className="loader text-center">
                  <i className="text-center fa fa-spinner fa-5x fa-spin" />
                </div>
              )}

              {/* featuredMenu.map(singleFood => (
                  <DefaultFood
                    key={singleFood.food_id}
                    {...singleFood}
                    handleAddToCart={this.handleAddToCart}
                  />
                )) */}
            </section>

            <section>
              <div className="card text-center">
                <h2>Wanna See Our Menu And All Food Items?</h2>
                <p>
                  <Link to="/users/foods" className="btn btn-blue btn-rounded btn-bg">
                    View Menu
                  </Link>
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

export const mapStateToProps = state => ({
  featuredMenu: state.featuredMenu,
  cart: state.cart,
  user: state.user,
});

export default connect(
  mapStateToProps,
  {
    getMenu,
    addToCart,
    toggleCartSlider,
    slideCart,
    toggleLoader,
  },
)(LandingPage);
