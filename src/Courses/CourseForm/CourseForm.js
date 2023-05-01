import React, { useEffect, useState, useRef, useContext } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { addCourse, updateCourse } from "../CourseService";
import styles from "./courseform.module.css";
import { useHistory, useNavigate, useParams } from "react-router-dom";
import { Toast } from "primereact/toast";
import { UserContext } from "../../App";

const styling = {
  marginBottom: "1rem",
  fontSize: "20px",
};

export function CourseForm() {
  const user = useContext(UserContext);
  const toast = useRef(null);
  const navigate = useNavigate();
  const [course, setCourse] = useState({
    name: "",
    instructor: user?.email,
    description: "",
  });
  const courseId = useParams().id;

  useEffect(() => {
    if (courseId) {
      fetch(`http://localhost:2000/course/byId/${courseId}`)
        .then((res) => res.json())
        .then((r) => {
          setCourse({
            instructor: r.instructor,
            id: courseId,
            reviews: [],
            name: r.name,
            description: r.description,
          });
        })
        .catch((err) => console.log(err));
    }
  }, []);
  const clickHandler = () => {
    !courseId
      ? addCourse(course)
          .then(() => {
            toast.current.show({
              severity: "success",
              summary: "Success",
              detail: "Course Added Successfully",
              life: 3000,
            });

            navigate("../list", {
              replace: true,
            });
          })
          .catch((err) => alert(err))
      : updateCourse(course)
          .then(() => {
            toast.current.show({
              severity: "success",
              summary: "Success",
              detail: "Course Updated Successfully",
              life: 3000,
            });
          })
          .catch((err) => {
            toast.current.show({
              severity: "error",
              summary: "error",
              detail: err,
              life: 3000,
            });
          });
  };

  return (
    <div className={styles.main}>
      <Toast ref={toast} position="top-right" />
      <div className={styles.container}>
        <h1>Course Form</h1>
        <div
          className="p-inputgroup"
          style={{
            marginBottom: "1rem",
          }}>
          <span className="p-inputgroup-addon">
            <i className="pi pi-bookmark"></i>
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
            rows={8}
            cols={60}
            onChange={(ev) =>
              setCourse({ ...course, description: ev.target.value })
            }
          />
        </div>

        <Button
          label={courseId ? "Update Course" : "Add Course"}
          style={styling}
          onClick={() => clickHandler()}
        />
      </div>
    </div>
  );
}
