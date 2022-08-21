import React, { useState } from "react";
import Button from "./Button";

import styles from "./ButtonPanel.module.css";

const ButtonPanel = (props) => {
  const buttons = [
    {
      id: "a",
      value: "7",
      isNumber: true,
      isEquals: false,
      isOperator: false,
      isDecimal: false,
      isAc: false,
      icon: null,
      ariaLabel: "Seven",
    },
    {
      id: "b",
      value: "8",
      isNumber: true,
      isEquals: false,
      isOperator: false,
      isDecimal: false,
      isAc: false,
      icon: null,
      ariaLabel: "Eight",
    },
    {
      id: "c",
      value: "9",
      isNumber: true,
      isEquals: false,
      isOperator: false,
      isDecimal: false,
      isAc: false,
      icon: null,
      ariaLabel: "Nine",
    },
    {
      id: "d",
      value: "/",
      isNumber: false,
      isEquals: false,
      isOperator: true,
      isDecimal: false,
      isAc: false,
      icon: "./icons/divide.svg",
      ariaLabel: "Divide",
    },
    {
      id: "e",
      value: "4",
      isNumber: true,
      isEquals: false,
      isOperator: false,
      isDecimal: false,
      isAc: false,
      icon: null,
      ariaLabel: "Four",
    },
    {
      id: "f",
      value: "5",
      isNumber: true,
      isEquals: false,
      isOperator: false,
      isDecimal: false,
      isAc: false,
      icon: null,
      ariaLabel: "Five",
    },
    {
      id: "g",
      value: "6",
      isNumber: true,
      isEquals: false,
      isOperator: false,
      isDecimal: false,
      isAc: false,
      icon: null,
      ariaLabel: "Six",
    },
    {
      id: "h",
      value: "*",
      isNumber: false,
      isEquals: false,
      isOperator: true,
      isDecimal: false,
      isAc: false,
      icon: "./icons/multiply.svg",
      ariaLabel: "Multiply",
    },
    {
      id: "i",
      value: "1",
      isNumber: true,
      isEquals: false,
      isOperator: false,
      isDecimal: false,
      isAc: false,
      icon: null,
      ariaLabel: "One",
    },
    {
      id: "j",
      value: "2",
      isNumber: true,
      isEquals: false,
      isOperator: false,
      isDecimal: false,
      isAc: false,
      icon: null,
      ariaLabel: "Two",
    },
    {
      id: "k",
      value: "3",
      isNumber: true,
      isEquals: false,
      isOperator: false,
      isDecimal: false,
      isAc: false,
      icon: null,
      ariaLabel: "Three",
    },
    {
      id: "l",
      value: "-",
      isNumber: false,
      isEquals: false,
      isOperator: true,
      isDecimal: false,
      isAc: false,
      icon: "./icons/minus.svg",
      ariaLabel: "Minus",
    },
    {
      id: "m",
      value: "0",
      isNumber: true,
      isEquals: false,
      isOperator: false,
      isDecimal: false,
      isAc: false,
      icon: null,
      ariaLabel: "Zero",
    },
    {
      id: "n",
      value: ".",
      isNumber: false,
      isEquals: false,
      isOperator: false,
      isDecimal: true,
      isAc: false,
      icon: null,
      ariaLabel: "Decimal",
    },
    {
      id: "o",
      value: "=",
      isNumber: false,
      isEquals: true,
      isOperator: false,
      isDecimal: false,
      isAc: false,
      icon: "./icons/equals.svg",
      ariaLabel: "Equals",
    },
    {
      id: "p",
      value: "+",
      isNumber: false,
      isEquals: false,
      isOperator: true,
      isDecimal: false,
      isAc: false,
      icon: "./icons/plus.svg",
      ariaLabel: "Plus",
    },
    {
      id: "q",
      value: "AC",
      isNumber: false,
      isEquals: false,
      isOperator: false,
      isDecimal: false,
      isAc: true,
      icon: null,
      ariaLabel: "AC",
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
              data={button}
              aria-label={button.ariaLabel}
            />
          );
        })}
      </div>
    </>
  );
};

export default ButtonPanel;
