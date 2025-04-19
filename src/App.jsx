/* File: App.jsx */
import { useState } from "react";

function App() {
  let variableX = 100;
  const [state_variableX, set_variableX] = useState(0);
  const [state_stringVariable, set_stringVariable] = useState("initial values");
  const changeValue = () => {
    console.log("Function is called...");
    variableX = 200;
    set_variableX(500);
    set_stringVariable("New Value");
  };
  return (
    <div>
      <h1>Value of simple variable in JavaScript: {variableX}</h1>
      <h1>
        <b>Value of state for variable: </b> {state_variableX}
      </h1>
      <h1>
        <b>String State Variable: </b> {state_stringVariable}
      </h1>
      <button
        onClick={changeValue}
        className="bg-green-800 text-white p-2 m-2 cursor-pointer"
      >
        Change value
      </button>
    </div>
  );
}
export default App;
