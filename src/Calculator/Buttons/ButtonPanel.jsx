import React, { useState } from "react";
import Button from "./Button";

import styles from "./ButtonPanel.module.css";

const ButtonPanel = (props) => {
  const buttons = [
    {
      id: "1",
      value: 7,
      icon: null,
    },
    {
      id: "2",
      value: 8,
      icon: null,
    },
    {
      id: "3",
      value: 9,
      icon: null,
    },
    {
      id: "4",
      value: "/",
      icon: "./icons/divide.svg",
    },
    {
      id: "5",
      value: 4,
      icon: null,
    },
    {
      id: "6",
      value: 5,
      icon: null,
    },
    {
      id: "7",
      value: 6,
      icon: null,
    },
    {
      id: "8",
      value: "*",
      icon: "./icons/multiply.svg",
    },
    {
      id: "9",
      value: 1,
      icon: null,
    },
    {
      id: "10",
      value: 2,
      icon: null,
    },
    {
      id: "11",
      value: 3,
      icon: null,
    },
    {
      id: "12",
      value: "-",
      icon: "./icons/minus.svg",
    },
    {
      id: "13",
      value: 0,
      icon: null,
    },
    {
      id: "14",
      value: ".",
      icon: null,
    },
    {
      id: "15",
      value: "=",
      icon: "./icons/equals.svg",
    },
    {
      id: "16",
      value: "+",
      icon: "./icons/plus.svg",
    },
    {
      id: "ac",
      value: "AC",
      icon: null,
    },
  ];

  return (
    <>
      <div className={styles["button-panel"]}>
        {buttons.map((button) => {
          return (
            <Button
              key={button.id}
              value={button.value}
              icon={button.icon}
              input={props.onUserInput}
            />
          );
        })}
      </div>
    </>
  );
};

export default ButtonPanel;
