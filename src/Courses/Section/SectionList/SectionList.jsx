import { useState, useEffect } from "react";
import { getAllSectionByCourseId } from "../../SectionService";
import { Button } from "primereact/button";

import emptybox from "../../../img/icons8-empty-box-100.png";
import { Panel } from "primereact/panel";
import { Ripple } from "primereact/ripple";
import { SectionCard } from "../SectionCard/SectionCard";

export const SectionList = ({ courseId, updateEvent }) => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    console.log("update event", updateEvent);
    getAllSectionByCourseId(courseId)
      .then((sections) => {
        console.log(sections);
        setSections([...sections]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderEmpty = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <h1>No Section Found</h1>
        <img src={emptybox}></img>
      </div>
    );
  };

  return (
    <div style={{ margin: "10pt", paddingLeft: "10pt", maxWidth: "50vw" }}>
      <h3>Section List</h3>
      {sections.length === 0 ? (
        renderEmpty()
      ) : (
        <div>
          {sections.map((section, idx) => {
            return <SectionCard section={section} key={idx} />;
          })}
        </div>
      )}
    </div>
  );
};
