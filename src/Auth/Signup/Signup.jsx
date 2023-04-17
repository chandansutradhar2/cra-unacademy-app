import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import * as Yup from "yup";
import { useFormik } from "formik";

import "./signup.css";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  mobileNo: Yup.string()
    .length(10, "Mobile Number must be 10 digits long")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  cpassword: Yup.string()
    .required("Required")
    .min(8, "Confirm Password must be 8 characters long")
    .oneOf([Yup.ref("password")], "Confirm Password must match Password"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password must be 8 characters long"),
});

export const Signup = ({userType}) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      cpassword: "",
      mobileNo: "",
      userType: userType,
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      //code to make a api call using fetch

      // fetch("http://localhost:2000/auth/signup", {
      //   body: JSON.stringify(values),
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // })
      //   .then((res) => console.log(res))
      //   .catch((err) => console.log(err));

      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="signup">
      <div className="signup__container">
        <div className="signup__container__header">
          <h1>Sign Up</h1>
        </div>
        <form
          className="signup__container__body"
          onSubmit={formik.handleSubmit}>
          <div
            className="p-inputgroup"
            style={{
              marginBottom: "1rem",
            }}>
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText
              placeholder="First Name"
              id="firstName"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
          </div>
          <small className="error">{formik.errors.firstName}</small>
          <div
            className="p-inputgroup"
            style={{
              marginBottom: "1rem",
            }}>
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText
              placeholder="Last Name"
              id="lastName"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
          </div>
          <small className="error">{formik.errors.lastName}</small>
          <div
            className="p-inputgroup"
            style={{
              marginBottom: "1rem",
            }}>
            <span className="p-inputgroup-addon">
              <i className="pi pi-at"></i>
            </span>
            <InputText
              placeholder="Email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          <small className="error">{formik.errors.email}</small>
          <div
            className="p-inputgroup"
            style={{
              marginBottom: "1rem",
            }}>
            <span className="p-inputgroup-addon">
              <i className="pi pi-key"></i>
            </span>
            <Password
              placeholder="Password"
              id="password"
              name="password"
              toggleMask={true}
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <small className="error">{formik.errors.password}</small>
          <div
            className="p-inputgroup"
            style={{
              marginBottom: "1rem",
            }}>
            <span className="p-inputgroup-addon">
              <i className="pi pi-key"></i>
            </span>
            <Password
              feedback={false}
              toggleMask={true}
              id="cpassword"
              name="cpassword"
              placeholder="Confirm Password"
              onChange={formik.handleChange}
              value={formik.values.cpassword}
            />
          </div>
          <small className="error">{formik.errors.cpassword}</small>
          <div
            className="p-inputgroup"
            style={{
              marginBottom: "1rem",
            }}>
            <span className="p-inputgroup-addon">
              <i className="pi pi-phone"></i>
            </span>
            <InputText
              placeholder="Mobile"
              id="mobileNo"
              name="mobileNo"
              value={formik.values.mobileNo}
              onChange={formik.handleChange}
            />
          </div>
          <small className="error">{formik.errors.mobileNo}</small>
          <Button
            label="CREATE ACCOUNT"
            style={{ width: "100%" }}
            className="p-button-raised full-width "
          />
        </form>
      </div>
    </div>
  );
};