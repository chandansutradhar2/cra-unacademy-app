import React from "react";
import "./header.css";
import logo from "../img/new-logo.png"; // with import

export const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header__menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
