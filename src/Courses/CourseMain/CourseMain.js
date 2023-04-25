import { Button } from "primereact/button";
import { CourseForm } from "../CourseForm/CourseForm";
import CourseList from "../CourseList/CourseList";
import { useEffect, useRef, useState } from "react";
import { Messages } from "primereact/messages";
import {
  Link,
  Outlet,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import { Suspense } from "react";

export default function CourseMain() {
  console.log("coursemain component loaded");
  const navigate = useNavigate();
  const params = useParams();

  const msg = useRef(null);
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    id: "",
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

  const onEditHandler = (course) => {
    setCourse(course);
    navigate("edit", {
      state: {
        course: course,
      },
    });
  };

  const courseUpdateHandler = (course) => {
    const index = courses.findIndex(
      (item) => item.courseName === course.courseName
    );
    if (index !== -1) {
      fetch("http://localhost:2000/course/update", {
        method: "PUT",
        body: JSON.stringify(course),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          res
            .json()
            .then((data) => {
              console.log(data);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });

      setCourses((prevState) => {
        prevState[index] = course;
        return [...prevState];
      });
    }
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
  };

  return (
    <>
      <div>
        <Link to="add">Add Course</Link> {"  "}
        <Link to="list">List Courses</Link>
      </div>
      <div>
        <Routes>
          <Route
            path="add"
            element={<CourseForm onCourseAdded={onCourseAdded} />}
          />
          <Route
            path="edit"
            element={
              <CourseForm
                course={course}
                onCourseUpdated={courseUpdateHandler}
              />
            }
          />
          <Route
            path="list"
            element={<CourseList courses={courses} onEdit={onEditHandler} />}
          />
        </Routes>
      </div>
      <div style={{ width: "100vw" }} id="course-main" name="course-main">
        <Outlet />
      </div>
    </>
  );
}
