import React, { useState, useEffect } from "react";

import CalculatorScreen from "./CalculatorScreen";

import styles from "./CalculatorBody.module.css";
import ButtonPanel from "./Buttons/ButtonPanel";

const CalculatorBody = () => {
  const [userInput, setUserInput] = useState([]);
  const [operator, setOperator] = useState("");
  const [equals, setEquals] = useState(false);
  const [calculation, setCalculation] = useState([]);
  const [fuckSums, setFuckSums] = useState([]);
  const [newSum, setNewSum] = useState(false);

  const isNum = (num) => !isNaN(num);

  const receiveUserInput = (input) => {
    if (newSum) {
      setUserInput([]);
      setFuckSums([]);
      setCalculation([]);
      setNewSum(false);
    }

    // if operator button pressed
    if (
      input.includes("/") ||
      input.includes("*") ||
      input.includes("+") ||
      input.includes("-")
    ) {
      setOperator(true);
      if ((newSum && !equals) || userInput.length === 0) {
        return;
      }
      if (
        userInput[userInput.length - 1].input === "/" ||
        userInput[userInput.length - 1].input === "*" ||
        userInput[userInput.length - 1].input === "+" ||
        userInput[userInput.length - 1].input === "-"
      ) {
        return;
      }
      setFuckSums((prevCalc) => {
        let concatArray = [];
        concatArray = calculation.join("");
        return [...prevCalc, concatArray, input];
      });
      setCalculation([]);
    }

    // if number button pressed
    if (isNum(input)) {
      setCalculation((prevCalc) => [...prevCalc, input]);
    }

    // if decimal button pressed
    if (input === ".") {
      if (
        (userInput.length > 0 &&
          userInput[userInput.length - 1].input === ".") ||
        calculation.includes(".")
      ) {
        return;
      }
      console.log(calculation);
      // const prevDecimalInNumberCheck =
      setCalculation((prevCalc) => [...prevCalc, input]);
    }

    // add final num input to fuckSums and then...
    if (input.includes("=")) {
      if ((newSum && !equals) || userInput.length === 0) {
        return;
      }
      const firstInput = userInput[0].input;
      const lastInput = userInput[userInput.length - 1].input;

      if (
        lastInput.includes("/") ||
        firstInput.includes("/") ||
        lastInput.includes("*") ||
        firstInput.includes("*") ||
        lastInput.includes("-") ||
        firstInput.includes("-") ||
        lastInput.includes("+") ||
        firstInput.includes("+") ||
        lastInput.includes(".")
      ) {
        return;
      }
      setFuckSums((prevFuckSums) => {
        const lastNum = calculation.join("");
        return [...prevFuckSums, lastNum];
      });
      setEquals(true);
    }

    setUserInput((prevUserInput) => {
      const receivedInput = {
        input: input,
        key: Math.random().toString(),
        operator: operator,
        equals: equals,
      };

      return [...prevUserInput, receivedInput];
    });
  };

  if (equals === true) {
    const result = Function("return " + fuckSums.join(" "))();
    const stringResult = result.toString();
    console.log(stringResult);
    setUserInput((prevInput) => {
      setEquals(false);
      const finalAnswer = {
        input: stringResult,
        key: "fuck",
        id: "answer",
      };
      return [finalAnswer];
    });
    setNewSum(true);
  }

  return (
    <article className={styles.calculator}>
      <CalculatorScreen screenDigits={userInput} />
      <ButtonPanel onUserInput={receiveUserInput} />
    </article>
  );
};

export default CalculatorBody;
