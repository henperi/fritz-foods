import React from 'react';

const ContactCard = () => (
  <div className="flex-item card contact" id="contact">
    <h2>Contact Us</h2>
    <form className="form-data container">
      <div className="form-member text-left">
        <label htmlFor="fullname">
          Full Name
          <input type="text" id="fullname" className="form-input" placeholder="Enter Fullname" />
        </label>
      </div>
      <div className="form-member text-left">
        <label htmlFor="email">
          Email
          <input type="email" className="form-input" placeholder="Enter Email" />
        </label>
      </div>
      <div className="form-member text-left">
        <label htmlFor="messafe">
          Message
          <textarea name="" id="message" cols="8" rows="10" placeholder="Type a message" />
        </label>
      </div>
      <button type="button" className="btn btn-blue btn-block btn-rounded btn-bg">
        Contact Us
      </button>
    </form>
  </div>
);

export default ContactCard;
