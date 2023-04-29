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
import { SectionForm } from "../Section/SectionForm";
import { ObjectiveForm } from "../CourseForm/Objectives/ObjectiveForm";
import { PrereqForm } from "../CourseForm/Prerequisites/PrereqForm";

export default function CourseMain() {
  const navigate = useNavigate();

  const msg = useRef(null);
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
        quizes: [
          {
            question: "",
            options: [],
            answer: "",
          },
        ],
        lessons: [
          {
            transcript: "",
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
      },
    ],
  });

  const onEditHandler = (course) => {
    setCourse(course);
    navigate("edit");
  };

  return (
    <>
      <div>
        <Link to="add">Add Course</Link> {"  "}
        <Link to="list">List Courses</Link>
      </div>
      <div>
        <Routes>
          <Route path="add" element={<CourseForm />} />
          <Route path="/edit/:id" element={<CourseForm course={course} />} />
          <Route path="/edit/:id/section" element={<SectionForm />} />
          <Route path="/edit/:id/objective" element={<ObjectiveForm />} />
          <Route path="/edit/:id/prereq" element={<PrereqForm />} />
          <Route path="list" element={<CourseList onEdit={onEditHandler} />} />
        </Routes>
      </div>
      <div style={{ width: "100vw" }} id="course-main" name="course-main">
        <Outlet />
      </div>
    </>
  );
}
