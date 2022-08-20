import React, { useState } from "react";
import styles from "./App.module.css";
import CalculatorBody from "./Calculator/CalculatorBody";

function App() {
  return (
    <>
      <h1>ReactCalc</h1>
      <CalculatorBody />
    </>
  );
}

export default App;
