import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="main">
      <nav className="nav">
        <Link to="/home" index className="link">
          Home
        </Link>
        <Link to="/course" className="link">
          Course
        </Link>
        <Link to="/course" className="link">
          Live Classes
        </Link>

        <Link className="link login" to="/login">
          Login
        </Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
