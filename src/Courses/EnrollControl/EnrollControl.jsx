import { Button } from "primereact/button";
export const EnrollControl = ({ course }) => {
  const enrollUser = () => {
    console.log(course);
  };
  return (
    <span>
      <Button label="Enroll" onClick={enrollUser} />
    </span>
  );
};
