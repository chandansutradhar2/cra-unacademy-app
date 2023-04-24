import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const u = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    if (token && u) {
      setIsLoggedIn(true);
      setUser(u);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div className="main">
      <nav className="nav">
        <Link to="/home" index="true" className="link">
          Home
        </Link>
        <Link to="/course" className="link">
          Course
        </Link>

        <Link to="/course" className="link">
          Live Classes
        </Link>

        {loggedIn ? (
          <Link
            className="link login"
            onClick={() => {
              localStorage.removeItem("user");
              localStorage.removeItem("access_token");
              setIsLoggedIn(false);
            }}>
            Logout
          </Link>
        ) : (
          <Link className="link login" to="/login">
            Login
          </Link>
        )}
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
