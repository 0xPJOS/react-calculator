import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  const clickHandler = (event) => {
    props.input(props.value.toString());
  };

  if (
    props.value === "*" ||
    props.value === "/" ||
    props.value === "*" ||
    props.value == "-"
  ) {
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
      {props.value}
    </button>
  );
};

export default Button;
