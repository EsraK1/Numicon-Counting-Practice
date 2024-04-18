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
    switch (num) {
      case 1:
        return require("../numicons/numicon_1.png");
      case 2:
        return require("../numicons/numicon_2.png");
      case 3:
        return require("../numicons/numicon_3.png");
      case 4:
        return require("../numicons/numicon_4.png");
      case 5:
        return require("../numicons/numicon_5.png");
      case 6:
        return require("../numicons/numicon_6.png");
      case 7:
        return require("../numicons/numicon_7.png");
      case 8:
        return require("../numicons/numicon_8.png");
      case 9:
        return require("../numicons/numicon_9.png");
      case 10:
        return require("../numicons/numicon_10.png");
      default:
        return null;
    }
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
