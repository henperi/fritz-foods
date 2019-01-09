import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../components/pages/LandingPage";
import MenuPage from "../components/pages/MenuPage";
import NotFoundPage from "../components/pages/NotFoundPage";
import CartPage from "../components/pages/CartPage";

const AppRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/users/foods" component={MenuPage} />
      <Route path="/users/my-cart" component={CartPage} />
      <Route path="/" component={LandingPage} exact={true} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRoutes;
