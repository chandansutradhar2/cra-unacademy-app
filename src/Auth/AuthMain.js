import { useState } from "react";
import { Signup } from "./Signup/Signup";
import { Selector } from "./Selector/Selector";

// export user USER_ROLE {
//     STUDENT = "STUDENT",
//     INSTRUCTOR = "INSTRUCTOR",
//     ADMIN = 'ADMIN'
// }

export const AuthMain = () => {
  const [userType, setUserType] = useState();

  return (
    <>
      {userType === "STUDENT" ||
      userType === "INSTRUCTOR" ||
      userType === "ADMIN" ? (
        <Signup userType={userType} />
      ) : (
        <Selector
          onSelected={(type) => {
            setUserType(type);
          }}
        />
      )}
    </>
  );
};
