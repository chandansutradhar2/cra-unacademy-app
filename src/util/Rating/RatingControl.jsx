import { Rating } from "primereact/rating";
import styles from "./rating.module.css";
export const RatingControl = () => {
  return (
    <div className={styles.rating}>
      <small className={styles.rate}>4.7</small>
      <Rating value={4} readOnly stars={5} cancel={false} />
    </div>
  );
};
