import React from "react";

export default function ContactUs() {
  return (
    <div className="register">
      <span className="registerTitle">Contact Us</span>
      <form className="registerForm">
        <label>First Name</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your First Name..."
        />
        <label>Last Name</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your Last Name..."
        />
        <label>Phone number</label>
        <input
          className="registerInput"
          type="number"
          placeholder="Enter your number..."
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="email"
          placeholder="Enter your email..."
        />
        <label>Query</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your query..."
        />
        <button className="registerButton">Submit</button>
      </form>
    </div>
  );
}
