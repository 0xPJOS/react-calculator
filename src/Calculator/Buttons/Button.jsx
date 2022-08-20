import React from "react";

import styles from "./Button.module.css";

import { ReactComponent as Divide } from "./icons/divide.svg";
import { ReactComponent as Equals } from "./icons/equals.svg";
import { ReactComponent as Minus } from "./icons/minus.svg";
import { ReactComponent as Plus } from "./icons/plus.svg";
import { ReactComponent as Multiply } from "./icons/multiply.svg";

const Button = (props) => {
  const clickHandler = (event) => {
    props.input(props.value.toString());
  };

  let icon;

  if (!null) {
    if (props.icon === "./icons/divide.svg") {
      icon = <Divide />;
    } else if (props.icon === "./icons/equals.svg") {
      icon = <Equals />;
    } else if (props.icon === "./icons/minus.svg") {
      icon = <Minus />;
    } else if (props.icon === "./icons/plus.svg") {
      icon = <Plus />;
    } else if (props.icon === "./icons/multiply.svg") {
      icon = <Multiply />;
    }
  }

  return (
    <button
      className={`${styles.button} ${props.value === "AC" && styles.ac} ${
        props.value === "+" ||
        props.value === "/" ||
        props.value === "*" ||
        props.value == "-"
          ? styles.operator
          : null
      } ${props.value === "=" && styles.equals}`}
      onClick={clickHandler}
    >
      {props.icon ? icon : props.value}
    </button>
  );
};

export default Button;
