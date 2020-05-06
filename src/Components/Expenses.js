import React, { Component } from "react";
import SingleExpense from "./SingleExpense";
import { connect } from "react-redux";

class Expenses extends Component {
  render() {
    const expenses = this.props.expenses.map((expense) => {
      return <SingleExpense key={expense.id} expense={expense}></SingleExpense>;
    });
    return <ul className="expenses">{expenses}</ul>;
  }
}

const mapStatetoProps = (state) => {
  return {
    expenses: state.expenses,
  };
};
export default connect(mapStatetoProps)(Expenses);
