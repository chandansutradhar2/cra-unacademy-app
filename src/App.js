import logo from "./logo.svg";
import "./App.css";
import { Signup } from "./Auth/Signup/Signup";
import { CourseMainComponent } from "./Courses/CourseMain/CourseMain";
import { LoginForm } from "./Auth/Login/Login";

function App() {
  return (
    <div>
      {/* <Signup /> */}
      <LoginForm />
      {/* <CourseMainComponent /> */}
    </div>
  );
}

export default App;
