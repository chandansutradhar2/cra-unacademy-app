import React, { Component } from "react";
import styles from "./course-list.module.css";
import { Button } from "primereact/button";
export default class CourseList extends Component {
  constructor(props) {
    super(props);
  }

  clickHandler = (item) => {
    //emitting an event from child to parent passing value
    this.props.onEdit(item);
  };

  render() {
    return (
      <div className={styles.main}>
        <div className={styles.container}>
          <h1>Course List</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Course Name</th>
                <th>Instructor</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.courses.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.courseName}</td>
                  <td>{item.authorName}</td>
                  <td>{item.description}</td>
                  <td>
                    <Button
                      label="Edit"
                      icon="pi pi-pencil"
                      onClick={(ev) => this.clickHandler(item)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
