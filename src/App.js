import React from "react";

//I want to create an app that will allow teachers to be able to do addition practice using numicons.
//Numicons will be chosen at random and the students will have to add them together.
//I want to hide the answer so that teachers can give students time to think about the answer.
//In the future I would like to allow teachers to choose the resource that they would like to do addition practice with.

function App() {
  const [num1, setNum1] = React.useState(0);
  const [num2, setNum2] = React.useState(0);
  const [num3, setNum3] = React.useState(0);

  // Function to generate new random numbers and set them
  const generateNumbers = () => {
    const newNum1 = Math.floor(Math.random() * 10);
    const newNum2 = Math.floor(Math.random() * 10);
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

  return (
    <>
      <h1>Addition practice App</h1>
      <div>
        <button>{num1}</button>
        <button>{num2}</button>
        <button>{num3}</button>
      </div>
      <button onClick={handleNext}>Next</button>
    </>
  );
}
export default App;
