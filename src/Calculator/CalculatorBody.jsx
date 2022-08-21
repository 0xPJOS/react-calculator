import React, { useState, useEffect } from "react";

import CalculatorScreen from "./CalculatorScreen";

import styles from "./CalculatorBody.module.css";
import ButtonPanel from "./Buttons/ButtonPanel";

const CalculatorBody = () => {
  const [userInputData, setUserInputData] = useState([]);
  const [equalsPressed, setEqualsPressed] = useState(false);
  const [inputValues, setInputValues] = useState([]);
  const [formattedValues, setFormattedValues] = useState([]);
  const [calcReset, setCalcReset] = useState(false);
  const [receivedInput, setReceivedInput] = useState("");

  const updateScreenDigits = (input) => {
    setUserInputData((prevUserInput) => {
      const digit = {
        value: input.value,
        id: Math.random(),
      };
      return [...prevUserInput, digit];
    });
  };

  const resetHandler = (input) => {
    setCalcReset(false);
    setUserInputData([]);
    setFormattedValues([]);
    setInputValues([]);
    if (input) {
      updateScreenDigits(input);
      setInputValues([...input.value]);
    }
  };

  const operatorHandler = (input) => {
    if (calcReset) return;
    if (userInputData.length === 0) return;

    if (
      userInputData[userInputData.length - 1].value === "/" ||
      userInputData[userInputData.length - 1].value === "*" ||
      userInputData[userInputData.length - 1].value === "+" ||
      userInputData[userInputData.length - 1].value === "-" ||
      userInputData[userInputData.length - 1].value === "."
    )
      return;

    setFormattedValues((prevCalc) => {
      let concatArray = [];
      concatArray = inputValues.join("");
      return [...prevCalc, concatArray, receivedInput.value];
    });

    setInputValues([]);
    updateScreenDigits(input);
  };

  const numberHandler = (input) => {
    if (calcReset) {
      resetHandler(input);
      return;
    }
    setInputValues((prevCalc) => [...prevCalc, ...input.value]);
    updateScreenDigits(input);
  };

  const decimalHandler = (input) => {
    if (calcReset) {
      resetHandler(input);
      return;
    }
    if (
      (userInputData.length > 0 &&
        userInputData[userInputData.length - 1].input === ".") ||
      inputValues.includes(".")
    )
      return;
    setInputValues((prevCalc) => [...prevCalc, ...input.value]);
    updateScreenDigits(input);
  };

  const equalsHandler = () => {
    if (calcReset) {
      resetHandler();
      return;
    }
    if (userInputData.length === 0) return;
    const lastInput = userInputData[userInputData.length - 1].value;
    if (
      lastInput.includes("/") ||
      lastInput.includes("*") ||
      lastInput.includes("-") ||
      lastInput.includes("+") ||
      lastInput.includes(".")
    )
      return;

    setFormattedValues((prevSum) => {
      const lastNum = inputValues.join("");
      return [...prevSum, lastNum];
    });

    setEqualsPressed(true);
  };

  const receivedInputHandler = (input) => {
    setReceivedInput(input);
  };

  const calcFormattedValues = () => {
    const result = Function("return " + formattedValues.join(" "))();
    const stringResult = result.toString();

    setEqualsPressed(false);

    setUserInputData((prevInput) => {
      const finalAnswer = {
        value: stringResult,
        key: "result",
        id: "answer",
      };

      return [finalAnswer];
    });

    setFormattedValues([]);
    setInputValues([]);
    setCalcReset(true);
  };

  useEffect(() => {
    receivedInput.isAc && resetHandler();
    receivedInput.isOperator && operatorHandler(receivedInput);
    receivedInput.isNumber && numberHandler(receivedInput);
    receivedInput.isDecimal && decimalHandler(receivedInput);
    receivedInput.isEquals && equalsHandler();
  }, [receivedInput]);

  useEffect(() => {
    equalsPressed && calcFormattedValues();
  }, [equalsPressed]);

  return (
    <article className={styles.calculator}>
      <CalculatorScreen screenDigits={userInputData} />
      <ButtonPanel onUserInput={receivedInputHandler} />
    </article>
  );
};

export default CalculatorBody;
