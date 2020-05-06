import React from "react";

export const AddAndRemoveExpense = (props) => {
  return (
    <div className="addexpense">
      <button className="income-btn" onClick={() => props.clicked("income")}>
        Add Income
      </button>
      <button
        className="spending-btn"
        onClick={() => props.clicked("spending")}
      >
        Add Spending
      </button>
    </div>
  );
};

export default AddAndRemoveExpense;
