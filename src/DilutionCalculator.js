import React, { useState } from "react";
import { Button } from "./App";

export default function DilutionCalculator({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className="container my-5 py-3">
      <div className="card text-color shadow p-3 mb-5 bg-body rounded">
        <h2 className="card-header">Dilution calculator</h2>
        <p
          onClick={handleToggle}
          className="container p-3"
          style={{ cursor: "pointer" }}
        >
          Check it out 👇
        </p>
        {isOpen && (
          <div className="row">
            {data.map((el) => (
              <CalculatorItem
                title={el.title}
                input1={el.input1}
                input2={el.input2}
                result={el.result}
                key={el.title}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function CalculatorItem({ title, input1, input2, result }) {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [resultValue, setResultValue] = useState(null);
  const [disableCalculate, setDisableCalculate] = useState(true);

  function handleCalculate() {
    console.log("Calculating...");
    if (
      isNaN(value1) ||
      isNaN(value2) ||
      value1.trim() === "" ||
      value2.trim() === ""
    ) {
      return;
    }
    const calculatedResult = parseFloat(value1) * parseFloat(value2);
    setResultValue(calculatedResult);
  }

  return (
    <form
      className="col-lg-6 text-color my-3 px-3"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="container">
        <div>
          <p>{title}</p>
          <div className="row mx-2 my-3">
            <label className="col-lg-6 col-md-12">{input1}</label>
            <input
              required
              className="col-lg-6 col-md-12"
              value={value1}
              onChange={(e) => {
                setValue1(e.target.value);
                setDisableCalculate(
                  isNaN(e.target.value) ||
                    isNaN(value2) ||
                    e.target.value.trim() === "" ||
                    value2.trim() === ""
                );
              }}
            />
          </div>
        </div>
        <div>
          <div className="row mx-2 my-3">
            <label className="col-lg-6 col-md-12">{input2}</label>
            <input
              required
              className="col-lg-6 col-md-12"
              value={value2}
              onChange={(e) => {
                setValue2(e.target.value);
                setDisableCalculate(
                  isNaN(value1) ||
                    isNaN(e.target.value) ||
                    value1.trim() === "" ||
                    e.target.value.trim() === ""
                );
              }}
            />
          </div>
          <div className="row">
            <div className="col-md-9 mx-2 my-3">
              <p>
                {result}:{" "}
                {resultValue !== null && (
                  <span>
                    <strong>{resultValue}</strong>
                  </span>
                )}
              </p>
            </div>
            <div className="col mx-2 my-3">
              <Button onClick={handleCalculate} disabled={disableCalculate}>
                Calculate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
