import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";

export const LoginForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [valid, isValid] = useState(false);

  const validate = () => {
    let isValid = true;
    if (!user.email) {
      isValid = false;
    }
    if (!user.password) {
      isValid = false;
      }
      
    return isValid;
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__container__header">
          <h1>Login</h1>
        </div>
        <div className="login__container__body">
          <div className="p-inputgroup" style={{ marginBottom: "1rem" }}>
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText
              placeholder="Email"
              value={user.email}
              onChange={(ev) => {
                setUser({ ...user, email: ev.target.value });
              }}
            />
          </div>
          <div className="p-inputgroup" style={{ marginBottom: "1rem" }}>
            <span className="p-inputgroup-addon">
              <i className="pi pi-key"></i>
            </span>
            <Password
              placeholder="Password"
              value={user.password}
              onChange={(ev) => {
                setUser({ ...user, password: ev.target.value });
              }}
            />
          </div>
          <div className="p-inputgroup" style={{ marginBottom: "1rem" }}>
            <span className="p-inputgroup-addon">
              <i className="pi pi-arrow-right"></i>
            </span>
            <Button label="Login" onClick={validate} />
          </div>
        </div>
      </div>
    </div>
  );
};
