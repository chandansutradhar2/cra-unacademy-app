import { Card } from "primereact/card";
import { Link } from "react-router-dom";
import styles from "./course.module.css";
import { RatingControl } from "../../util/Rating/RatingControl.jsx";
import { Button } from "primereact/button";
import { EnrollControl } from "../EnrollControl/EnrollControl";

export const CourseCard = ({ course }) => {
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
    return <EnrollControl course={course} />;
  };
  return (
    <Card
      className={styles.card}
      header={generateRandomImage()}
      footer={getFooter()}>
      <h3 className={styles.h3}>{course.name}</h3>
      <div style={{ marginTop: 0, fontStyle: "light" }}>
        {course.description}
      </div>
    </Card>
    // <div className={styles.card} key={course.id}>
    //   <div className={styles.cardImage}>
    //     <img
    //       src={generateRandomImage()}
    //       alt="course"
    //       width={200}
    //       height={150}
    //     />
    //   </div>
    //   <div className={styles.cardContent}>
    //     <h3 className={styles.h3}>{course.name}</h3>
    //     <div style={{ marginTop: 0, fontStyle: "light" }}>
    //       {course.description}
    //     </div>
    //     <div className={styles.rating}>
    //       <RatingControl />
    //     </div>
    //     <div className={styles.instructor}>{course.instructor}</div>
    //     <div className={styles.btn}>
    //       <Link to={`/course/${course.id}`} className={styles.link}>
    //         View Course
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};
