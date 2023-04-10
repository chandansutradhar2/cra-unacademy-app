import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

export function CourseForm() {
  const value = "Course Description";
  return (
    <>
      <h1>Course Form</h1>
      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">
          <i className="pi pi-user"></i>
        </span>
        <InputText placeholder="Course Name" />
      </div>
      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">
          <i className="pi pi-user"></i>
        </span>
        <InputText placeholder="Author Name" />
      </div>

      <div>
        <InputTextarea value={value} rows={5} cols={30} />
      </div>

      <Button label="ADD COURSE" />
    </>
  );
}
