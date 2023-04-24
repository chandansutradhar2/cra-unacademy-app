import { Button } from "primereact/button";
import { CourseForm } from "../CourseForm/CourseForm";
import CourseList from "../CourseList/CourseList";
import { useEffect, useRef, useState } from "react";
import { Messages } from "primereact/messages";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { Suspense } from "react";

export const CourseMainComponent = () => {
  const [listCourse, setListCourse] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const msg = useRef(null);
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    name: "",
    instructor: "",
    description: "",
    imageUrl: "",
    students: [],
    duration: 0,
    languages: [],
    learningObjectives: [],
    prerequisites: [],
    reviews: [
      {
        review: "",
        rating: 0,
        postedOn: "",
        postedBy: "",
        show: false,
      },
    ],
    forum: [],
    sections: [
      {
        name: "",
        description: "",
        duration: 0,
        videos: [
          {
            name: "",
            language: "",
            description: "",
            duration: 0,
            url: "",
            videoCC: "",
          },
        ],
      },
    ],
  });

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("http://localhost:2000/course/all");
      const data = await response.json();
      setCourses(data);
    };
    fetchCourses();
  }, []);

  const addButtonHandler = () => {
    setListCourse(false);
    setCourse({});
  };

  const listCourseButtonHandler = () => {
    setListCourse(true);
    setCourse({});
  };

  const editButtonHandler = (course) => {
    if (course) {
      setListCourse(false);
      setCourse(course);
    }
  };

  const courseUpdateHandler = (course) => {
    const index = courses.findIndex(
      (item) => item.courseName === course.courseName
    );
    if (index !== -1) {
      setCourses((prevState) => {
        prevState[index] = course;
        return [...prevState];
      });
    }
    setListCourse(true);
  };

  const onCourseAdded = async (course) => {
    const response = await fetch("http://localhost:2000/course/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    })
      .then((result) => {
        console.log(result);
        result.json().then((data) => {
          console.log(data);
          setCourses((prevState) => {
            //prevState=[{},{},{}]
            return [course, ...prevState];
          });
        });
      })
      .catch((error) => {
        alert(JSON.stringify(error));
        console.log(error);
      });

    console.log(courses);
    setListCourse(true);
    setShowMessage(true);
  };

  return (
    <>
      <div>
        <Link to="add">Add Course</Link>
        <Link to="list">List Courses</Link>
      </div>
      <div>
        <Routes>
          <Route path="add" element={<CourseForm />} />
          <Route
            path="list"
            element={
              <CourseList courses={courses} onCourseAdded={onCourseAdded}  />
            }
          />
        </Routes>
      </div>
      <div style={{ width: "100vw" }} id="course-main" name="course-main">
        <Outlet />
      </div>
    </>
  );
};
