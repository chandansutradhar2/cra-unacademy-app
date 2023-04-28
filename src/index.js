import React, { Suspense } from "react"; //libarary that defines whata  component is and how it works
import ReactDOM from "react-dom/client"; //libarary that knows how to take a component and make it show up on the screen
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import { Home } from "./Home/Home";

const CourseMainLazy = React.lazy(() =>
  import("./Courses/CourseMain/CourseMain")
);

const AuthMainLazy = React.lazy(() => import("./Auth/AuthMain"));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            path="/course/*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <CourseMainLazy />
              </Suspense>
            }
          />

          <Route path="/home" index element={<Home />} />
          <Route path="/home/:firstName" index element={<Home />} />
        </Route>

        <Route
          path="/user/*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <AuthMainLazy />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
