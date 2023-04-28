import React, { Component, useEffect, useState } from "react";
import styles from "./course-list.module.css";
import ActionControl from "../ActionControl/ActionControl";
import { Link } from "react-router-dom";
import { getAllCourse } from "../CourseService";
import { CourseCard } from "../CourseCard/CourseCard";
export default function CourseList() {
  console.log("course list component loaded");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getAllCourse().then((res) => {
      console.log(res);
      setCourses([...res]);
    });
  }, []);
  const onMenuClicked = (label, item) => {
    alert(label);
    switch (label) {
      case "Edit Course":
        this.props.onEdit(item);
        break;
      case "Delete Course":

      default:
        break;
    }
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.courses}>
          {courses && courses.length > 0 ? (
            courses.map((course) => {
              return <CourseCard key={course.id} course={course} />;
            })
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </>
  );
}
