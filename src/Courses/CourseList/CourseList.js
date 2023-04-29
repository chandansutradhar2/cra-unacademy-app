import React, { Component, useEffect, useState } from "react";
import styles from "./course-list.module.css";
import { getAllCourse } from "../CourseService";
import { CourseCard } from "../CourseCard/CourseCard";
export default function CourseList() {
  const [courses, setCourses] = useState([]);
  
  useEffect( () => {
    
  getAllCourse().then((res) => {
    console.log(res);
    setCourses([...res]);
  });
  }, []);


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
