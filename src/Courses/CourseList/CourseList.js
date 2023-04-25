import React, { Component, useEffect, useState } from "react";
import styles from "./course-list.module.css";
import ActionControl from "../ActionControl/ActionControl";
import { Link } from "react-router-dom";
import { getAllCourse } from "../CourseService";
export default function CourseList() {
  console.log("course list component loaded");
  const [courses, setCourses] = useState([]);

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
    <div className={styles.main}>
      <div className={styles.container}>
        <h1>Course List</h1>
        {courses && courses.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Course Name</th>
                <th>Instructor</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.instructor}</td>
                  <td>{item.description}</td>
                  <td>
                    <ActionControl
                      onMenuClicked={(ev) => onMenuClicked(ev, item)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
