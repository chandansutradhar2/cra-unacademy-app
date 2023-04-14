import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import styles from "./courseform.module.css";
import CourseList from "../CourseList/CourseList";

const styling = {
  marginBottom: "1rem",
  fontSize: "20px",
};

export function CourseForm() {
  console.log("CourseForm");
  const [course, setCourse] = useState({
    courseName: "",
    authorName: "",
    description: "",
  });
  const clickHandler = () => {
    alert(
      course.courseName + " :" + course.authorName + ": " + course.description
    );
  };

  const editHandler = (ev) => {
    setCourse({
      courseName: ev.courseName,
      authorName: ev.authorName,
      description: ev.description,
    });
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1>Course Form</h1>
        <div
          className="p-inputgroup"
          style={{
            marginBottom: "1rem",
          }}>
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <InputText
            placeholder="Course Name"
            value={course.courseName}
            onChange={(ev) =>
              setCourse({ ...course, courseName: ev.target.value })
            }
          />
        </div>
        <div
          className="p-inputgroup"
          style={{
            marginBottom: "1rem",
          }}>
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <InputText
            placeholder="Author Name"
            value={course.authorName}
            onChange={(ev) =>
              setCourse({ ...course, authorName: ev.target.value })
            }
          />
        </div>

        <div>
          <InputTextarea
            value={course.description}
            rows={5}
            cols={30}
            onChange={(ev) =>
              setCourse({ ...course, description: ev.target.value })
            }
          />
        </div>

        <Button
          label="ADD COURSE"
          style={styling}
          onClick={() => clickHandler()}
        />
      </div>
      <CourseList course={course} onEdit={editHandler} />
    </div>
  );
}
