import React, { Component, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./home.module.css";

export const Home = () => {
  const { firstName } = useParams();

  return (
    <div className={styles.home}>
      <h6>Welcome , {firstName}</h6>
      <h1 className={styles.h1}>Learn Anywhere, Anytime</h1>
      <div className={styles.btn}>
        <Link to="/course" className={styles.link}>
          Explore Courses
        </Link>
      </div>
    </div>
  );
};
