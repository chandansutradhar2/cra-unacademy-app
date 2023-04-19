import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./login.module.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password must be 8 characters long"),
});

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      //alert( JSON.stringify( values, null, 2 ) );
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
          res.json().then((data) => {
            console.log(data);
            if (data.statusCode === 401) {
              alert(data.message);
              return;
            }
            localStorage.setItem("access_token", data.access_token);
            alert(" welcome back " + formik.values.email);
          });
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
            alt=" angular logo"
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
                id="email"
                name="email"
                type="email"
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
                className={formik.errors.password ? "p-invalid block" : ""}
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
          </form>
        </div>
      </div>
    </div>
  );
};
