import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../components/pages/LandingPage';
import MenuPage from '../components/pages/MenuPage';
import NotFoundPage from '../components/pages/NotFoundPage';
import CartPage from '../components/pages/CartPage';
import SignupPage from '../components/pages/SignupPage';
import LoginPage from '../components/pages/LoginPage';
import ScrollToTop from './ScrollToTop';

const AppRoutes = () => (
  <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/signup" component={SignupPage} exact />
        <Route path="/signin" component={LoginPage} exact />
        <Route path="/users/foods" component={MenuPage} />
        <Route path="/users/my-cart" component={CartPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
);

export default AppRoutes;
