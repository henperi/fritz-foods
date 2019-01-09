import React from "react";

export const ContactCard = () => (
  <div className="flex-item card" id="contact">
    <h2>Contact Us</h2>
    <form className="form-data container">
      <div className="form-member text-left">
        <label htmlFor="">Full Name</label>
        <input
          type="text"
          className="form-input"
          placeholder="Enter Fullname"
        />
      </div>
      <div className="form-member text-left">
        <label htmlFor="">Email</label>
        <input type="email" className="form-input" placeholder="Enter Email" />
      </div>
      <div className="form-member text-left">
        <label htmlFor="">Message</label>
        <textarea
          name=""
          id=""
          cols="8"
          rows="10"
          placeholder="Type a message"
        />
      </div>
      <button className="btn btn-blue btn-block btn-rounded btn-bg">
        Contact Us
      </button>
    </form>
  </div>
);
