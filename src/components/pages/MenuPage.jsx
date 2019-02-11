import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../ui/Header';
import Footer from '../ui/Footer';
import LoadingSpinner from '../ui/LoadingSpinner';
import { DefaultFood } from '../ui/FoodCard';
import { ViewMore1 } from '../ui/ViewMore';
import { getMenu } from '../../actions/menuActions';
import { addToCart, toggleCartSlider, slideCart } from '../../actions/cartActions';

export class MenuPage extends Component {
  state = {
    menu: [],
    cart: [],
  };

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
    const { menu, cart } = this.state;
    return (
      <div>
        <Header cartCount={cart.length} />
        <main className="main-content">
          <div className="container hideX">
            <LoadingSpinner />
            <h1 className="text-center">Whats On Our Menu</h1>
            <section className="card">
              {menu.length > 0 ? (
                <div className="food-menu">
                  {menu.map(singleFood => (
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

              <ViewMore1 />
            </section>
          </div>
        </main>
        <Footer cartCount={cart.length} />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  menu: state.menu,
  cart: state.cart,
});

export default connect(
  mapStateToProps,
  {
    getMenu,
    addToCart,
    toggleCartSlider,
    slideCart,
  },
)(MenuPage);
