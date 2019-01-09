import React from "react";
import { NavLink, Link } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { LoadingSpinner } from "../ui/LoadingSpinner";
import { DefaultFood } from "../ui/FoodCard";
import { ViewMore } from "../ui/ViewMore";

const MenuPage = () => (
  <div>
    <Header />
    <main className="main-content">
      <div className="container hideX">
        <LoadingSpinner />
        <h1 className="text-center">Whats On Our Menu</h1>
        <section className="card">
          <div className="food-menu">
            <DefaultFood />
          </div>
          <ViewMore />
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default MenuPage;
