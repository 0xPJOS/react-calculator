import React from "react";

import styles from "./Button.module.css";

import { ReactComponent as Divide } from "./icons/divide.svg";
import { ReactComponent as Equals } from "./icons/equals.svg";
import { ReactComponent as Minus } from "./icons/minus.svg";
import { ReactComponent as Plus } from "./icons/plus.svg";
import { ReactComponent as Multiply } from "./icons/multiply.svg";

const Button = (props) => {
  const clickHandler = () => {
    props.input(props.data);
  };

  let icon;

  if (!null) {
    if (props.data.icon === "./icons/divide.svg") {
      icon = <Divide />;
    } else if (props.data.icon === "./icons/equals.svg") {
      icon = <Equals />;
    } else if (props.data.icon === "./icons/minus.svg") {
      icon = <Minus />;
    } else if (props.data.icon === "./icons/plus.svg") {
      icon = <Plus />;
    } else if (props.data.icon === "./icons/multiply.svg") {
      icon = <Multiply />;
    }
  }

  const isOperator =
    props.data.value === "+" ||
    props.data.value === "/" ||
    props.data.value === "*" ||
    props.data.value == "-";

  return (
    <button
      className={`${styles.button} ${props.data.value === "AC" && styles.ac} ${
        props.data.isOperator ? styles.operator : null
      } ${props.data.value === "=" && styles.equals}`}
      onClick={clickHandler}
    >
      {props.data.icon ? icon : props.data.value}
    </button>
  );
};

export default Button;
