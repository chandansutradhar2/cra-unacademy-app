import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { GenderSelector } from "./user-selector";

export function UserForm() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNo: "",
  });
  const createAccount = () => {
    alert("Account Created");
  };
  return (
    <div>
      <h1>User Form</h1>

      <div className="p-inputgroup" style={{ marginBottom: "1rem" }}>
        <span className="p-inputgroup-addon">
          <i className="pi pi-user"></i>
        </span>
        <InputText
          placeholder="FirstName"
          onChange={(ev) => setUser({ ...user, firstName: ev.target.value })}
        />
      </div>

      <div className="p-inputgroup" style={{ marginBottom: "1rem" }}>
        <span className="p-inputgroup-addon">
          <i className="pi pi-user"></i>
        </span>
        <InputText
          placeholder="Last Name"
          onChange={(ev) => setUser({ ...user, lastName: ev.target.value })}
        />
      </div>

      <div className="p-inputgroup" style={{ marginBottom: "1rem" }}>
        <span className="p-inputgroup-addon">
          <i className="pi pi-user"></i>
        </span>
        <InputText
          placeholder="email"
          onChange={(ev) => setUser({ ...user, email: ev.target.value })}
        />
      </div>

      <div className="p-inputgroup" style={{ marginBottom: "1rem" }}>
        <span className="p-inputgroup-addon">
          <i className="pi pi-user"></i>
        </span>
        <InputText
          placeholder="Password"
          onChange={(ev) => setUser({ ...user, password: ev.target.value })}
        />
      </div>

      <div className="p-inputgroup" style={{ marginBottom: "1rem" }}>
        <span className="p-inputgroup-addon">
          <i className="pi pi-user"></i>
        </span>
        <InputText
          placeholder="Mobile No"
          onChange={(ev) => setUser({ ...user, mobileNo: ev.target.value })}
        />
          </div>
          
          <GenderSelector/>

      <Button
        label="CREATE ACCOUNT"
        style={{ marginTop: "1rem" }}
        onClick={() => createAccount()}
      />
    </div>
  );
}
