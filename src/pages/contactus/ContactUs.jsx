import React, { useState } from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import emailjs from "emailjs-com";
import "./contactus.css";

export default function ContactUs(e) {
  const form = useRef();
  const [details, setDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    query: "",
  });
  const history = useHistory();
  const ContactUs = (details) => {
    if (
      details.fname != "" &&
      details.lname != "" &&
      details.email != "" &&
      details.phone != "" &&
      details.query != ""
    ) {
      history.push("/");
     
      emailjs
        .sendForm(
          "service_nz0158o",
          "template_kvml0g5",
          form.current,
          "user_FToWdb01vYWbtBVQSss1A"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      alert("Please fill the data");
    }
    
  };
  

  const submitHandler = (e) => {
    e.preventDefault();

    ContactUs(details);
  };
  return (
    <div className="contactus">
      <span className="registerTitle">Contact Us</span>
      <form ref={form} className="registerForm">
        <label>First Name</label>
        <input
          className="registerInput"
          type="text"
          name="name"
          placeholder="Enter your First Name..."
          onChange={(e) => setDetails({ ...details, fname: e.target.value })}
          value={details.fname}
          required
        />
        <label>Last Name</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your Last Name..."
          onChange={(e) => setDetails({ ...details, lname: e.target.value })}
          value={details.lname}
          required
        />
        <label>Phone number</label>
        <input
          className="registerInput"
          type="number"
          placeholder="Enter your number..."
          onChange={(e) => setDetails({ ...details, phone: e.target.value })}
          value={details.phone}
          required
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="email"
          name="email"
          placeholder="Enter your email..."
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
          required
        />
        <label>Query</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your query..."
          onChange={(e) => setDetails({ ...details, query: e.target.value })}
          value={details.query}
          required
        />
        <button className="registerButton" onClick={submitHandler}>
          Submit
        </button>
      </form>
    </div>
  );
}
