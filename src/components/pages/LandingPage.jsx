import React from 'react';
import Header from '../ui/Header';
import Footer from '../ui/Footer';
import { DefaultFood } from '../ui/FoodCard';
import Hero from '../ui/Hero';
import AboutCard from '../ui/AboutCard';
import ContactCard from '../ui/ContactCard';

const LandingPage = () => (
  <div>
    <Header />
    <main>
      <Hero />
      <div className="p-h-5 text-center">
        <p>To enjoy amazing discounts and have a fun filled experience, login to your account!</p>
        <div>
          <a href="signin.html" className="btn btn-green">
            Login Now!
          </a>
          <a href="signup.html" className="btn btn-blue">
            Signup Now!
          </a>
        </div>
      </div>

      <div className="containerX">
        <section>
          <h2 className="text-center">Todays Featured Foods</h2>
          <div className="container food-menu">
            <DefaultFood />
            <DefaultFood />
            <DefaultFood />
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

export default LandingPage;
