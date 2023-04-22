import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./login.module.css";
import { Link } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password must be 8 characters long")
    .max(16, "cannot be more than 16 characters"),
});

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      fetch("http://localhost:2000/auth/login", {
        body: JSON.stringify(values),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .catch((err) => {
          alert("failed to login due to some error");
        })
        .then((res) => {
          console.log("fetch response=>", res);
          if (res.status === 201) {
            res.json().then(async (data) => {
              localStorage.setItem("access_token", data.access_token);
              alert(" welcome back " + formik.values.email);
              const user = await fetch(
                `http://localhost:2000/user/current-user/${formik.values.email}`,
                {
                  method: "GET",
                }
              );

              const userJson = await user.json();
              console.log( userJson );
              //todo: reditect to home
              //send user name to the home component as params

              localStorage.setItem("user", JSON.stringify(userJson));
            });
          } else if (res.status === 401) {
            alert("invalid credentials");
          } else {
            alert("failed to login due to some technical error");
          }
        });
    },
  });

  return (
    <div className="login">
      <div className={styles.login_container}>
        <div className={styles.login_container_left}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            height={120}
            width={120}
            alt=" react logo"
          />
        </div>
        <div className={styles.login_container_right}>
          <form
            className="login__container__right"
            onSubmit={formik.handleSubmit}>
            <h2>Login</h2>
            <div className="p-inputgroup" style={{ marginBottom: "1rem" }}>
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>

              <InputText
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className={formik.errors.email ? "p-invalid block" : ""}
              />
            </div>
            <small className={styles.password}>{formik.errors.email}</small>

            <div className="p-inputgroup" style={{ marginBottom: "1rem" }}>
              <span className="p-inputgroup-addon">
                <i className="pi pi-key"></i>
              </span>
              <Password
                
                placeholder="Password"
                value={formik.values.password}
                feedback={false}
                toggleMask={true}
                id="password"
                name="password"
                onChange={formik.handleChange}
                className={ formik.errors.password ? "p-invalid block" : "" }
                s
              />
            </div>
            {formik.errors.password ? (
              <small className={styles.password}>
                {formik.errors.password}
              </small>
            ) : null}
            <div className="p-inputgroup" style={{ marginBottom: "1rem" }}>
              <span className="p-inputgroup-addon">
                <i className="pi pi-arrow-right"></i>
              </span>
              <Button label="Login" type="submit" className={styles.button} />
            </div>

            <Link to="../user/signup">New Here? Create an Account</Link>
          </form>
        </div>
      </div>
    </div>
  );
};
