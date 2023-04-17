import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import styles from "./courseform.module.css";
import {Message,MessageProps} from 'primereact/message'
const styling = {
  marginBottom: "1rem",
  fontSize: "20px",
};

export function CourseForm(props) {
  const [course, setCourse] = useState(props.course);
  const clickHandler = () => {
    if (props.course.courseName) {
      props.onCourseUpdated(course);
    } else {
      props.onCourseAdded(course);
    }
    
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
          label={props.course?.courseName ? "Update Course" : "Add Course"}
          style={styling}
          onClick={() => clickHandler()}
        />
      </div>
    </div>
  );
}
