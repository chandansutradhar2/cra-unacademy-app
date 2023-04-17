import { Button } from "primereact/button";
//generate a function component called Selector
import styles from "./selector.module.css";
import { useState } from "react";

export const Selector = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <i
          className="pi pi-user"
          style={{ padding: "10px", fontSize: "5em", color: "white" }}
        />
        <Button
          label="I'm a student"
          className="p-button-rounded"
          onClick={() => props.onSelected("STUDENT")}
        />
      </div>
      <div className={styles.right}>
        <i
          className="pi pi-user"
          style={{ padding: "10px", fontSize: "5em", color: "black" }}
        />
        <Button
          label="I'm an instructor"
          className="p-button-rounded p-button-success"
          onClick={() => props.onSelected("INSTRUCTOR")}
        />
      </div>
    </div>
  );
};
