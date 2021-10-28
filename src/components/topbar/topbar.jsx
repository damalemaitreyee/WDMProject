import React from "react";
import "./topbar.css";
import logo from '../../images/logo.png'
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <img className="topImg" src={logo} alt="Logo" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <Link to="/">
          <li className="topListItem">HOME</li>
          </Link>
          <Link to="/about">
          <li className="topListItem">ABOUT</li>
          </Link>
          <li className="topListItem">SERVICES</li>
          <Link to="/contactus">
          <li className="topListItem">CONTACT US</li>
          </Link>
          <Link to="/login">
          <li className="topListItem">LOGIN</li>
          </Link>
          <Link to="/register">
          <li className="topListItem">REGISTER</li>
          </Link>
        </ul>
      </div>
      <div className="topRight">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
    </div>
  );
}
