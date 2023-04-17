import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";

import "./signup.css";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
    fullName: "",
    mobileNo: "",
    confirmPassword: "",
  });

  const matchPassword = (e) => {
    if (e.target.value !== user.password) {
      setError("Password does not match");
    } else {
      setError("");
    }
  };

  return (
    <div className="signup">
      <div className="signup__container">
        <div className="signup__container__header">
          <h1>Sign Up</h1>
        </div>
        <div className="signup__container__body">
          <div
            className="p-inputgroup"
            style={{
              marginBottom: "1rem",
            }}>
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText placeholder="Full Name" />
          </div>
          <div
            className="p-inputgroup"
            style={{
              marginBottom: "1rem",
            }}>
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText placeholder="Email" />
          </div>
          <div
            className="p-inputgroup"
            style={{
              marginBottom: "1rem",
            }}>
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <Password placeholder="Password" />
          </div>
          <div
            className="p-inputgroup"
            style={{
              marginBottom: "1rem",
            }}>
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <Password placeholder="Confirm Password" onBlur={matchPassword} />
          </div>
          <div
            className="p-inputgroup"
            style={{
              marginBottom: "1rem",
            }}>
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText placeholder="Mobile" />
          </div>
          <Button
            label="CREATE ACCOUNT"
            style={{ width: "100%" }}
            className="p-button-raised full-width "
          />
        </div>
      </div>
    </div>
  );
};
