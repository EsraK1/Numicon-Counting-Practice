//I want to create an app that will allow teachers to be able to do addition practice using numicons.
//Numicons will be chosen at random and the students will have to add them together.
//I want to hide the answer so that teachers can give students time to think about the answer.
//In the future I would like to allow teachers to choose the resource that they would like to do addition practice with.

import React from "react";

function App() {
  const [num1, setNum1] = React.useState(0);
  const [num2, setNum2] = React.useState(0);
  const [num3, setNum3] = React.useState(0);

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
  };

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
          <div class="box right">{num3}</div>
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
