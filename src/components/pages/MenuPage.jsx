import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../ui/Header';
import Footer from '../ui/Footer';
import LoadingSpinner from '../ui/LoadingSpinner';
import { DefaultFood } from '../ui/FoodCard';
import { ViewMore1 } from '../ui/ViewMore';
import { getMenu } from '../../actions/menuActions';

class MenuPage extends Component {
  state = {
    menu: [],
  };

  componentWillMount() {
    const { getMenu: dispatchGetMenu } = this.props;
    dispatchGetMenu();
  }

  componentWillReceiveProps(nextProps) {
    return nextProps.menu && this.setState({ ...nextProps.menu });
  }

  render() {
    const { menu } = this.state;
    // const Menu = [...menu];
    console.log('menu:::', menu);
    // menu.foreach((singleFood) => {
    //   console.log(singleFood, 'hhhhh');
    // });
    return (
      <div>
        <Header />
        <main className="main-content">
          <div className="container hideX">
            <LoadingSpinner />
            <h1 className="text-center">Whats On Our Menu</h1>
            <section className="card">
              <div className="food-menu">
                {menu.map(singleFood => (
                  <DefaultFood key={singleFood.food_id} {...singleFood} />
                ))}
              </div>
              <ViewMore1 />
            </section>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.menu,
});

export default connect(
  mapStateToProps,
  { getMenu },
)(MenuPage);
