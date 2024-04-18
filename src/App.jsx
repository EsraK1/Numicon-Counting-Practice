import React, { useState } from "react";
import GameDisplay from "./components/GameDisplay";
import OperationSelection from "./components/OperationSelection";

function App() {
  const [selectedOperation, setSelectedOperation] = useState(null);
  const [showOperationSelection, setShowOperationSelection] = useState(true);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [showNum3, setShowNum3] = useState(false);

  const generateNumbers = () => {
    let newNum1 = 0;
    let newNum2 = 0;

    while (newNum1 === 0 || newNum2 === 0) {
      newNum1 = Math.floor(Math.random() * 10);
      newNum2 = Math.floor(Math.random() * 10);
    }

    setNum1(newNum1);
    setNum2(newNum2);
    if (selectedOperation === "addition") {
      setNum3(newNum1 + newNum2);
    } else if (selectedOperation === "subtraction") {
      setNum3(newNum1 - newNum2);
    }
  };

  const handleOperationSelect = (selectedOperation) => {
    setSelectedOperation(selectedOperation);
    generateNumbers();
    setShowOperationSelection(false);
  };

  const handleNext = () => {
    generateNumbers();
    setShowNum3(false);
  };

  const handleClick = () => {
    setShowNum3(true);
  };

  const handleChangeOperation = () => {
    setShowOperationSelection(true);
    setSelectedOperation(null);
    setShowNum3(false);
  };

  return (
    <div className="page">
      <h1>Numicon Practice Game</h1>
      {showOperationSelection ? (
        <OperationSelection onSelect={handleOperationSelect} />
      ) : (
        <>
          {" "}
          <GameDisplay
            num1={num1}
            num2={num2}
            num3={num3}
            showNum3={showNum3}
            onNext={handleNext}
            selectedOperation={selectedOperation}
            onClick={handleClick}
          />
          <div className="button-container">
            <button className="button" onClick={handleNext}>
              Next question
            </button>
            <button className="button" onClick={handleChangeOperation}>
              Change Operation
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
