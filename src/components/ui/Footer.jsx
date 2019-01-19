import React from 'react';
import { CartSlider1 } from './CartSlider';

const Footer = props => (
  <div>
    <CartSlider1 {...props} />
    <footer className="footer text-center">
      <div>Fast Food Fast. &copy; All Rights Reserved</div>
    </footer>
  </div>
);

export default Footer;
