
import React, { useState } from "react";

function App() {
  const getImageFileName = (num) => {
    switch (num) {
      case 1:
        return require("./numicons/numicon_1.png");
      case 2:
        return require("./numicons/numicon_2.png");
      case 3:
        return require("./numicons/numicon_3.png");
      case 4:
        return require("./numicons/numicon_4.png");
      case 5:
        return require("./numicons/numicon_5.png");
      case 6:
        return require("./numicons/numicon_6.jpeg");
      case 7:
        return require("./numicons/numicon_7.png");
      case 8:
        return require("./numicons/numicon_8.jpeg");
      case 9:
        return require("./numicons/numicon_9.jpeg");
      case 10:
        return require("./numicons/numicon_10.png");
      default:
        return null;
    }
  };

  const [num1, setNum1] = React.useState(0);
  const [num2, setNum2] = React.useState(0);
  const [num3, setNum3] = React.useState(0);
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
    setNum3(newNum1 + newNum2);
  };

  React.useEffect(() => {
    generateNumbers();
  }, []);

  const handleNext = () => {
    generateNumbers();
    setShowNum3(false);
  };

  const handleClick = () => {
    setShowNum3(true);
  };

  return (
    <>
      <div class="page">
        <h1>Numicon addition practice game</h1>

        <div class="container">
          <div class="box left">
            <img src={getImageFileName(num1)} alt={num1} className="box-img" />
          </div>
          <div className="addition-sign">+</div>
          <div class="box center">
            <img src={getImageFileName(num2)} alt={num2} className="box-img" />
          </div>
          <div className="equals-sign">=</div>
          <div className="box right" onClick={handleClick}>
            {showNum3 ? (
              num3
            ) : (
              <span className="star" onClick={handleClick}>
                &#9733;
              </span>
            )}
          </div>
        </div>
        <div class="button-container">
          <button class="next" onClick={handleNext}>
            Next question
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
