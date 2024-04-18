import React from "react";

function GameDisplay({
  num1,
  num2,
  num3,
  showNum3,
  onNext,
  onClick,
  selectedOperation,
}) {
  const getImageFileName = (num) => {
    if (num < 1 || num > 10) {
      return null;
    }
    return require(`../numicons/numicon_${num}.png`);
  };

  return (
    <div className="game-display">
      <div className="container">
        <div className="box left">
          <img src={getImageFileName(num1)} alt={num1} className="box-img" />
        </div>
        <div className="operation-sign">
          {selectedOperation === "addition"
            ? "+"
            : selectedOperation === "subtraction"
            ? "-"
            : ""}
        </div>

        <div className="box center">
          <img src={getImageFileName(num2)} alt={num2} className="box-img" />
        </div>
        <div className="equals-sign">=</div>
        <div className="box right">
          {showNum3 ? (
            num3
          ) : (
            <span className="star" onClick={onClick}>
              &#9733;
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default GameDisplay;
