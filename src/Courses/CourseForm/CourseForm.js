import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { addCourse } from "../CourseService";
import styles from "./courseform.module.css";
import { useHistory, useNavigate } from "react-router-dom";
const styling = {
  marginBottom: "1rem",
  fontSize: "20px",
};

export function CourseForm(props) {
  console.log("courseform component loaded");

  const navigate = useNavigate();

  const [course, setCourse] = useState(props.course);

  useEffect(() => {
    if (course === null || course === undefined) {
      setCourse({
        name: "",
        instructor: "",
        description: "",
      });
    }
  }, []);

  const clickHandler = () => {
    addCourse(course)
      .then(() => {
        alert("course added successfully");
        navigate("../list", {
          replace: true,
        });
      })
      .catch((err) => alert(err));
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
            value={course?.name}
            onChange={(ev) => setCourse({ ...course, name: ev.target.value })}
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
            placeholder="Instructor Name"
            value={course?.instructor}
            onChange={(ev) =>
              setCourse({ ...course, instructor: ev.target.value })
            }
          />
        </div>

        <div>
          <InputTextarea
            value={course?.description}
            rows={5}
            cols={30}
            onChange={(ev) =>
              setCourse({ ...course, description: ev.target.value })
            }
          />
        </div>

        <Button
          label={props.course?.name ? "Update Course" : "Add Course"}
          style={styling}
          onClick={() => clickHandler()}
        />
      </div>
    </div>
  );
}
