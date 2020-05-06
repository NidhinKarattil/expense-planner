import React from "react";
import { connect } from "react-redux";

export function SingleExpense(props) {
  let expenceAmount =
    props.expense.amount > 0 ? props.expense.amount : props.expense.amount * -1;
  return (
    <li className="singleexpense">
      <div>
        <p>{props.expense.date}</p>
        <h3 className={props.expense.amount > 0 ? "income" : "spending"}>
          {expenceAmount} Kc
        </h3>
      </div>
      <div>{props.expense.name}</div>
      <button onClick={() => props.removeExpense(props.expense.id)}>
        delete
      </button>
    </li>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeExpense: (id) => dispatch({ type: "DELETE_EXPENSE", payload: id }),
  };
};
export default connect(null, mapDispatchToProps)(SingleExpense);
