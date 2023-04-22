import React, { Component } from "react";
import styles from "./course-list.module.css";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { Toast } from "primereact/toast";

export default class CourseList extends Component {
  constructor(props) {
    super(props);
    this.items = [
      {
        label: "Update Course",
        icon: "pi pi-fw pi-pencil",
        items: [
          {
            label: "Edit Course",
            command: (event) => {
              //this.props.onEdit(event.item);
            },
          },
          {
            label: "Add/Edit Sections",
            command: (event) => {
              this.props.onEdit(event.item);
            },
          },
          {
            label: "Add/Edit Learning Objective",
            command: (event) => {
              this.props.onEdit(event.item);
            },
          },
          {
            label: "Add / Edit Course Prerequistes",
            command: (event) => {
              this.props.onEdit(event.item);
            },
          },
          {
            label: "Add / Edit Languages",
            command: (event) => {
              this.props.onEdit(event.item);
            },
          },
        ],
      },
      {
        label: "Course Mangament",
        icon: "pi pi-fw pi-trash",
        items: [
          {
            label: "Delete Course",
            icon: "pi pi-fw pi-trash",
            command: (event) => {},
          },
          {
            label: "Disable Course",
            icon: "pi pi-fw pi-times",
            command: (event) => {},
          },
          {
            label: "Reviews",
            icon: "pi pi-fw pi-star",
          },
          {
            label: "Students",
            icon: "pi pi-fw pi-user",
          },
        ],
      },
    ];
  }

  // clickHandler = (item) => {
  //   //emitting an event from child to parent passing value
  //   this.props.onEdit(item);
  // };

  render() {
    return (
      <div className={styles.main}>
        <Toast
          ref={(el) => {
            this.toast = el;
          }}></Toast>

        <div className={styles.container}>
          <h1>Course List</h1>
          <Menu
            model={this.items}
            popup={true}
            ref={(el) => (this.menu = el)}
          />
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
                    <Button
                      label="Edit"
                      aria-controls="popup_menu"
                      aria-haspopup
                      icon="pi pi-pencil"
                      onClick={(ev) => this.menu.toggle(ev)}
                      // onClick={(ev) => this.clickHandler(item)}
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
