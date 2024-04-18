import React from "react";

function OperationSelection({ onSelect }) {
  return (
    <div className="button-container">
      <h2>Select Operation</h2>

      <button className="button" onClick={() => onSelect("addition")}>
        Addition
      </button>
      <button className="button" onClick={() => onSelect("subtraction")}>
        Subtraction
      </button>
    </div>
  );
}

export default OperationSelection;
