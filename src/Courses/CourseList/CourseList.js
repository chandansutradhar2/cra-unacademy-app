import React, { Component } from "react";
import styles from "./course-list.module.css";
import { Button } from "primereact/button";
export default class CourseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
        {
          id: 1,
          courseName: "fundamental of VueJS",
          authorName: "Xavier",
          description: "covers vuejs latest",
        },
        {
          id: 2,
          courseName: "Intro to python",
          authorName: "Yash",
          description: "welcome to the world of AI and ML",
        },
        {
          id: 3,
          courseName: "ReactJS From zero to hero",
          authorName: "Archana",
          description:
            "Understand reactjs from basics to advance using graphql client",
        },
      ],
      selectedCourseId: "",
    };
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
              </tr>
            </thead>
            <tbody>
              {this.state.courses.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.courseName}</td>
                  <td>{item.authorName}</td>
                  <td>{item.description}</td>
                  <td>
                    <Button
                      label="Edit"
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
