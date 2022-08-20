import React, { useState } from "react";
import styles from "./App.module.css";
import CalculatorBody from "./Calculator/CalculatorBody";

function App() {
  return (
    <>
      <main>
        <h1>ReactCalc</h1>
        <CalculatorBody />
      </main>
    </>
  );
}

export default App;
