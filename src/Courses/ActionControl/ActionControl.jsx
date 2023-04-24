import { Menu } from "primereact/menu";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { PrimeIcons } from "primereact/api";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import React, { useRef } from "react";

export default function ActionControl() {
  const menu = useRef(null);
  const toast = useRef(null);
  let navigate = useNavigate();

  let items = [
    {
      label: "Editing",
      items: [
        {
          label: "Edit Course",
          icon: "pi pi-fw pi-pencil",
          command: (event) => {
            //this.props.onMenuClicked(event.item);
            navigate("/course/edit", {
              replace: true,
            });
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
      label: "Miscellaneous",
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
          link: "/students",
          icon: PrimeIcons.USER_PLUS,
          command: ( event ) => {
                                    toast.current.show({
                                      severity: "success",
                                      summary: "Updated",
                                      detail: "Data Updated",
                                      life: 3000,
                                    });

          },
        },
      ],
    },
  ];

  return (
    <>
      <div>
        <Toast ref={toast}></Toast>
      </div>
      <div>
        <Menu model={items} popup ref={menu} id="popup_menu" />
      </div>
      <div>
        <Button
          label="Actions"
          aria-controls="popup_menu"
          aria-haspopup
          
          icon="pi pi-settings"
          onClick={(ev) => menu.current.toggle(ev)}
          // onClick={(ev) => this.clickHandler(item)}
        />
      </div>
    </>
  );
}
