import React from "react";

import styles from "./CalculatorScreen.module.css";

const CalculatorScreen = (props) => {
  const digits = props.screenDigits.map((digit) => {
    if (digit.value === "AC") return;

    return (
      <div
        key={digit.id}
        className={`${styles["screen-digits"]} ${
          digit.value === "*" ||
          digit.value === "/" ||
          digit.value === "+" ||
          digit.value === "-"
            ? styles.operators
            : null
        } ${digit.value === "." && styles.decimal}`}
      >
        {digit.value}
      </div>
    );
  });

  // const answer = props.result.map();

  return (
    <div className={styles.screen}>
      {/* {props.screenDigits.length > 0 ? digits : "0"} */}
      {digits}
    </div>
  );
};

export default CalculatorScreen;
