import { Button } from "primereact/button";
import { CourseForm } from "../CourseForm/CourseForm";
import CourseList from "../CourseList/CourseList";
import { useRef, useState } from "react";
import { Messages } from "primereact/messages";

export const CourseMainComponent = () => {
  const [listCourse, setListCourse] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const msg = useRef(null);
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    courseName: "",
    authorName: "",
    description: "",
  });

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
    const index = courses.findIndex((item) => item.courseName === course.courseName);
    if (index !== -1) {
      setCourses((prevState) => {
        prevState[index] = course;
        return [...prevState];
      });

      msg.current.show({
        severity: "success",
        detail: "course updated successfully",
        sticky: true,
        life: 3000,
      });

      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
    setListCourse(true);
  };

  const onCourseAdded = (course) => {
    setCourses( ( prevState ) => {
      //prevState=[{},{},{}]
      return [course, ...prevState];
    });

    console.log(courses);
    setListCourse(true);
    setShowMessage(true);
  };

  return (
    <div>
      {showMessage ? <Messages ref={msg}></Messages> : null}
      <Button
        label="Add Course"
        onClick={addButtonHandler}
        style={{ marginRight: "1rem" }}
      />
      <Button label="List Course" onClick={listCourseButtonHandler} />
      {listCourse ? (
        <CourseList courses={courses} onEdit={editButtonHandler} />
      ) : (
        <CourseForm
          course={course}
          onCourseAdded={onCourseAdded}
          onCourseUpdated={courseUpdateHandler}
        />
      )}
    </div>
  );
};
