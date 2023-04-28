import React, { useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import * as Yup from "yup";
import { useFormik } from "formik";
import { createAccount } from "../AuthService";
import { Link } from "react-router-dom";

import "./signup.css";
import { Toast } from "primereact/toast";

//match dto of nestjs
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

export const Signup = ({ userType }) => {
  const toast = useRef(null);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      cpassword: "",
      mobileNo: "",
      roles: [userType],
    },
    validationSchema: SignupSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      //code to make a api call using fetch
      createAccount(values)
        .then( () =>
          
          toast.current.show({
            severity: "success",
            summary: "Success Message",
            detail: "Account Created Successfully...please wait login you in",
            life: 3000,
          } )

          //todo: signIn()
          
        )
        .catch((err) =>
          toast.current.show({
            severity: "error",
            summary: "Error Message",
            detail: err.message,
            life: 3000,
          })
        );
    },
    onReset: () => {
      formik.resetForm();
    },
  });

  const validateEmail = async (email) => {
    const response = await fetch(`/auth/check-email-exists?email=${email}`);
    const data = await response.json();
    if (!data.exists) {
      throw new Error("Email address not found");
    }
  };

  return (
    <div className="signup">
      <div className="signup__container">
        <Toast ref={toast}></Toast>
        <div className="signup__container__header">
          <h1>Sign Up</h1>
        </div>
        <form
          className="signup__container__body"
          onSubmit={formik.handleSubmit}>
          <span style={{ width: "100%", display: "none" }}>
            some text here to span screen size to increase the screen size
          </span>
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
            type="submit"
            label="CREATE ACCOUNT"
            style={{ width: "100%" }}
            className="p-button-raised full-width "
          />
        </form>

        <Link
          style={{ paddingTop: "10px", textDecoration: "none" }}
          to="../login">
          Already have an Account? Login here
        </Link>
      </div>
    </div>
  );
};
