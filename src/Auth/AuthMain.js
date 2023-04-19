import { useState } from "react";
import { Signup } from "./Signup/Signup";
import { Selector } from "./Selector/Selector";
import { LoginForm } from "./Login/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// export user USER_ROLE {
//     STUDENT = "STUDENT",
//     INSTRUCTOR = "INSTRUCTOR",
//     ADMIN = 'ADMIN'
// }

export const AuthMain = () => {
  const [userType, setUserType] = useState();

  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup/:userType" element={<Signup />} />

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
  );
};
