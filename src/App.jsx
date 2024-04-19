import React, { useCallback, useEffect, useState } from "react";
import GameDisplay from "./components/GameDisplay";
import OperationSelection from "./components/OperationSelection";

function App() {
  const [selectedOperation, setSelectedOperation] = useState(null);
  const [showOperationSelection, setShowOperationSelection] = useState(true);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [showNum3, setShowNum3] = useState(false);
  const [rotation1, setRotation1] = useState();
  const [rotation2, setRotation2] = useState();

  const generateNumbers = useCallback(() => {
    let newNum1 = 0;
    let newNum2 = 0;

    while (newNum1 === 0 || newNum2 === 0) {
      newNum1 = Math.floor(Math.random() * 10);
      newNum2 = Math.floor(Math.random() * 10);
    }

    setNum1(newNum1);
    setNum2(newNum2);

    switch (selectedOperation) {
      case "addition":
        setNum3(newNum1 + newNum2);
        break;
      case "subtraction":
        setNum3(newNum1 - newNum2);
        break;
      default:
        setNum3(0);
    }
  }, [selectedOperation]);

  useEffect(() => {
    if (selectedOperation) {
      generateNumbers();
    }
  }, [selectedOperation, generateNumbers]);

  const handleOperationSelect = useCallback(
    (selectedOperation) => {
      setSelectedOperation(selectedOperation);
      setShowOperationSelection(false);
      generateNumbers();
    },
    [generateNumbers]
  );

  const handleNext = () => {
    generateNumbers();
    setRotation1(Math.floor(Math.random() * 4) * 90);
    setRotation2(Math.floor(Math.random() * 4) * 90);
    setShowNum3(false);
  };

  const handleClick = () => {
    setShowNum3(true);
  };

  const handleChangeOperation = useCallback(() => {
    setShowOperationSelection(true);
    setSelectedOperation(null);
    setShowNum3(false);
  }, []);

  return (
    <div className="page">
      <h1>Numicon {selectedOperation} practice</h1>
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
            selectedOperation={selectedOperation}
            onClick={handleClick}
            rotation1={rotation1}
            rotation2={rotation2}
            onNext={handleNext}
          />
          <div className="button-container">
            <button className="button" onClick={handleNext}>
              Next question
            </button>
            <button className="button" onClick={handleChangeOperation}>
              Change operation
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
