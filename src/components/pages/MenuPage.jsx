import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../ui/Header';
import Footer from '../ui/Footer';
import LoadingSpinner from '../ui/LoadingSpinner';
import { DefaultFood } from '../ui/FoodCard';
import { ViewMore1 } from '../ui/ViewMore';
import { getMenu } from '../../actions/menuActions';
import { addToCart, toggleCartSlider } from '../../actions/cartActions';

class MenuPage extends Component {
  state = {
    menu: [],
    cart: [],
  };

  componentWillMount() {
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
    const { menu, cart } = this.state;

    return (
      <div>
        <Header cartCount={cart.length} />
        <main className="main-content">
          <div className="container hideX">
            <LoadingSpinner />
            <h1 className="text-center">
              Whats On Our Menu
              {cart.length}
            </h1>
            <section className="card">
              <div className="food-menu">
                {menu.map(singleFood => (
                  <DefaultFood
                    key={singleFood.food_id}
                    {...singleFood}
                    handleAddToCart={this.handleAddToCart}
                  />
                ))}
              </div>
              <ViewMore1 />
            </section>
          </div>
        </main>
        <Footer cartCount={cart.length} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.menu,
  cart: state.cart,
});

export default connect(
  mapStateToProps,
  { getMenu, addToCart, toggleCartSlider },
)(MenuPage);
