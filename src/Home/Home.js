import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h2>Home Component</h2>
      <Link to="/course">Course</Link>
    </div>
  );
};
