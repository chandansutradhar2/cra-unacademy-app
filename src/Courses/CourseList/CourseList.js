import React, { Component } from "react";
import styles from "./course-list.module.css";
import ActionControl from "../ActionControl/ActionControl";
import { Link } from "react-router-dom";

export default class CourseList extends Component {
  constructor(props) {
    super(props);
  }

  // clickHandler = (item) => {
  //   //emitting an event from child to parent passing value
  //   this.props.onEdit(item);
  // };

  onMenuClicked = (label,item) => {
    alert(label);
    switch (label) {
      case "Edit Course":
        this.props.onEdit(item);
        break;

      default:
        break;
    }
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
                  <td>{item.name}</td>
                  <td>{item.instructor}</td>
                  <td>{item.description}</td>
                  <td>
                    <ActionControl
                      onMenuClicked={(ev) => this.onMenuClicked(ev,item)}
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
