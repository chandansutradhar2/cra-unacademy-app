import { Card } from "primereact/card";
import { Link } from "react-router-dom";
import styles from "./coursecard.module.css";
import { RatingControl } from "../../util/Rating/RatingControl.jsx";
import { Button } from "primereact/button";
import { EnrollControl } from "../EnrollControl/EnrollControl";
import ActionControl from "../ActionControl/ActionControl";
import { useContext } from "react";
import { UserContext } from "../../App";

export const CourseCard = ({ course }) => {
  const user = useContext(UserContext);
  console.log(user);
  const generateRandomImage = () => {
    return (
      <img
        src={"https://picsum.photos/300/200"}
        style={{
          borderTopRightRadius: "0.5rem",
          borderTopLeftRadius: "0.5rem",
        }}
      />
    );
  };

  const getFooter = () => {
    return (
      <div className={styles.footer}>
        <EnrollControl course={course} />
        {user.roles.includes("INSTRUCTOR") ? (
          <ActionControl course={course} />
        ) : null}
      </div>
    );
  };
  return (
    <Card
      key={course.id}
      className={styles.card}
      footer={getFooter()}
      header={generateRandomImage()}>
      <h3 className={styles.h3}>{course.name}</h3>
      <p
        className={styles.truncate}
        style={{ marginTop: 0, fontStyle: "light" }}>
        {course.description}
      </p>
    </Card>
  );
};
