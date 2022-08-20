import React from "react";

import styles from "./CalculatorScreen.module.css";

const CalculatorScreen = (props) => {
  const digits = props.screenDigits.map((digit) => {
    if (digit.input === "AC") {
      return;
    }
    return (
      <div
        key={digit.key}
        className={`${styles["screen-digits"]} ${
          digit.input === "*" ||
          digit.input === "/" ||
          digit.input === "+" ||
          digit.input === "-"
            ? styles.operators
            : null
        } ${digit.input === "." && styles.decimal}`}
      >
        {digit.input}
      </div>
    );
  });

  // const answer = props.result.map();

  return (
    <div className={styles.screen}>
      {props.screenDigits.length > 0 ? digits : "0"}
    </div>
  );
};

export default CalculatorScreen;
