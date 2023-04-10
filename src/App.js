import logo from "./logo.svg";
import "./App.css";
import { Button } from "primereact/button";
import { Header } from "./Header/Header";
import { CourseForm } from "./Courses/Course/CourseForm";

function App() {
  //todo: pure js functions

  return (
    <div>
      {/* <Header /> */}
      <CourseForm />
    </div>
  );
}

export default App;
