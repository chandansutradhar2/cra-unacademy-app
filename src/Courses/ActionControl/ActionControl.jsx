import { Menu } from "primereact/menu";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { PrimeIcons } from "primereact/api";

import React from "react";
export default class ActionControl extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      {
        label: "Update Course",
        items: [
          {
            label: "Edit Course",
            icon: "pi pi-fw pi-pencil",
            command: (event) => {
              //this.props.onMenuClicked(event.item);
            },
          },
          {
            label: "Sections",
            icon: "pi pi-fw pi-book",
            command: (event) => {
              this.props.onMenuClicked(event.item.label);
            },
          },
          {
            label: "Learning Objective",
            icon: PrimeIcons.BELL,
            command: (event) => {
              this.props.onMenuClicked(event.item.label);
            },
          },
          {
            label: "Prerequistes",
            icon: PrimeIcons.CHECK_CIRCLE,
            command: (event) => {
              this.props.onMenuClicked(event.item.label);
            },
          },
          {
            label: "Languages",
            icon: PrimeIcons.GLOBE,
            command: (event) => {
              console.log(event.item.label);
            },
          },
        ],
      },
      {
        label: "Course Mangament",
        items: [
          {
            label: "Delete Course",
            icon: "pi pi-fw pi-trash",
            command: (event) => {
              this.props.onMenuClicked(event.item.label);
            },
          },
          {
            label: "Disable Course",
            icon: "pi pi-fw pi-times",
            command: (event) => {
              this.props.onMenuClicked(event.item.label);
            },
          },
          {
            label: "Reviews",
            icon: "pi pi-fw pi-star",
            command: (event) => {
              this.props.onMenuClicked(event.item.label);
            },
          },
          {
            label: "Students",
            icon: "pi pi-fw pi-user",
            command: (event) => {
              this.props.onMenuClicked(event.item.label);
            },
          },
        ],
      },
    ];
  }
  render() {
    return (
      <>
        <div>
          <Toast
            ref={(el) => {
              this.toast = el;
            }}></Toast>
        </div>
        <div>
          <Menu
            model={this.items}
            popup={true}
            ref={(el) => (this.menu = el)}
          />
        </div>
        <div>
          <Button
            label="Actions"
            aria-controls="popup_menu"
            aria-haspopup
            icon="pi pi-settings"
            onClick={(ev) => this.menu.toggle(ev)}
            // onClick={(ev) => this.clickHandler(item)}
          />
        </div>
      </>
    );
  }
}
