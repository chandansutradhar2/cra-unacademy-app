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
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__container__header">
          <h1>Login</h1>
        </div>
        <form className="login__container__body" onSubmit={formik.handleSubmit}>
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
          {formik.errors.email ? (
            <small className={styles.password}>{formik.errors.email}</small>
          ) : null}
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
            <small className={styles.password}>{formik.errors.password}</small>
          ) : null}
          <div className="p-inputgroup" style={{ marginBottom: "1rem" }}>
            <span className="p-inputgroup-addon">
              <i className="pi pi-arrow-right"></i>
            </span>
            <Button label="Login" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};
