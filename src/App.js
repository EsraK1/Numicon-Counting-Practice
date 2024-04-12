import "./App.css";

function App() {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const num3 = num1 + num2;

  return (
    //I want to create an app that will allow teachers to be able to do addition practice using numicons.
    //Numicons will be chosen at random and the students will have to add them together.
    //I want to hide the answer so that teachers can give students time to think about the answer.
    //In the future I would like to allow teachers to choose the resource that they would like to do addition practice with.

    <>
      <h1>Addition practice App</h1>
      <div>
        <button>{num1}</button>
        <button>{num2}</button>
        <button>{num3}</button>
      </div>
    </>
  );
}

export default App;
