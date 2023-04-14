import logo from "./logo.svg";
import "./App.css";
import { Button } from "primereact/button";
import { Header } from "./Header/Header";
import { CourseForm } from "./Courses/CourseForm/CourseForm";
import CourseList from "./Courses/CourseList/CourseList";
import { UserForm } from "./User/UserForm";
import { useState } from "react";

function App() {
  return (
    <div>
      {/* <UserForm /> */}
      <CourseForm />
    </div>
  );
}

export default App;
