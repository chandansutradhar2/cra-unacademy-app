import React from "react";
import "./header.css";
import logo from "../img/new-logo.png"; // with import

export const Header = () => {
  return (
    <div className="header">
      <div className="logo-box">
        <div className="logo">
          <span
            style={{
              color: "white",
              fontSize: "30px",
              fontWeight: "400",
            }}>
            UN
          </span>
        </div>
      </div>

      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">UNACADEMY</span>
          <span className="heading-primary-sub">
            Learn anytime, anywhere with ease.
          </span>
          <span className="heading-primary-sub-2">Your future starts here</span>
        </h1>

        <a href="#" className="btn btn--white">
          Start Learning
        </a>
      </div>
    </div>
  );
};
