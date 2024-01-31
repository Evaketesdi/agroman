import React, { useState } from "react";
import { Button } from "./App";

export default function DilutionCalculator({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className="container my-5">
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

  function handleCalculate() {
    if (
      title ===
      "1. Know the required amount of product and the recommended concentration of the spraying solution. What amount of water should you use to prepare the spray solution?"
    ) {
      const calculatedResult1 = parseFloat(value1) / parseFloat(value2) / 10;
      setResultValue(calculatedResult1);
    } else if (
      title ===
      "2. Know the amount of solution required (the volume of the spray pump) and the recommended concentration. What amount of product should you use to prepare the spray solution?"
    ) {
      const calculatedResult2 = parseFloat(value1) * parseFloat(value2) * 10;
      setResultValue(calculatedResult2);
    }
  }

  return (
    <form className="col-lg-6 text-color my-3 px-3">
      <div className="container">
        <div>
          <p>{title}</p>
          <div className="row mx-2 my-3">
            <label className="col">{input1}</label>
            <input
              className="col"
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div className="row mx-2 my-3">
            <label className="col">{input2}</label>
            <input
              className="col"
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
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
              <Button onClick={handleCalculate}>Calculate</Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
