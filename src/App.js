import logo from "./logo.svg";
import "./App.css";
import { CourseMainComponent } from "./Courses/CourseMain/CourseMain";
import { Layout } from "./Layout/Layout";
import { AuthMain } from "./Auth/AuthMain";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { LoginForm } from "./Auth/Login/Login";
import NoPage from "./NoPage/NoPage";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="course" element={<CourseMainComponent />} />
    //       <Route path="login" element={<LoginForm />} />
    //       <Route path="*" element={<NoPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
