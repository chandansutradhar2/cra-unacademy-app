import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}>
        <Link to="/course" style={{ padding: "0.8rem" }}>
          Course
        </Link>
        <Link to="/home" style={{ padding: "0.8rem" }}>
          Home
        </Link>
        <Link to="/login" style={{ padding: "0.8rem" }}>
          Login
        </Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
