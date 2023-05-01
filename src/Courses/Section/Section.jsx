import { useState } from "react";
import { SectionForm } from "./SecionForm/SectionForm";
import { SectionList } from "./SectionList/SectionList";
import { useParams } from "react-router-dom";

export const Section = () => {
  const courseId = useParams().id;
  const [done, setDone] = useState(false);

  const onCompleted = () => {
    setDone(true);
    alert(done);
  };
  return (
    <div style={{ display: "block", width: "100vw" }}>
      <div
        style={{ display: "flex", justifyContent: "center", maxWidth: "90vw" }}>
        <SectionForm courseId={courseId} onCompleted={onCompleted} />
        <SectionList courseId={courseId} updateEvent={done} />
      </div>
    </div>
  );
};
