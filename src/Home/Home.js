import React, { Component, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./home.module.css";

export const Home = () => {

  return (
    <div className={styles.home}>
      <h1 className={styles.h1}>Learn Anywhwere, Anytime</h1>
      <div className={styles.btn}>
        <Link to="/course" className={styles.link}>
          Explore Courses
        </Link>
      </div>
    </div>
  );
};
