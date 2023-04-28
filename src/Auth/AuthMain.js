import { useState } from "react";
import { Signup } from "./Signup/Signup";
import { Selector } from "./Selector/Selector";
import { LoginForm } from "./Login/Login";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
// export user USER_ROLE {
//     STUDENT = "STUDENT",
//     INSTRUCTOR = "INSTRUCTOR",
//     ADMIN = 'ADMIN'
// }

const AuthMain = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState();

  const onSelected = (type) => {
    alert(type);
    setUserType(type);
    navigate("/user/signup/");
  };

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/selector"
          element={<Selector onSelected={onSelected} />}
        />
        <Route
          path="/signup"
          element={<Signup userType={userType} />}
        />

        {/* {userType === "STUDENT" ||
      userType === "INSTRUCTOR" ||
      userType === "ADMIN" ? (
        <Signup userType={userType} />
      ) : (
        <Selector
          onSelected={(type) => setUserType(type)}
        />
      )} */}
      </Routes>
      <Outlet />
    </>
  );
};

export default AuthMain;
