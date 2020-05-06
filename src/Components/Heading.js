import React, { Component } from "react";
import { connect } from "react-redux";
import IncomeSpending from "./IncomeSpending";

class Heading extends Component {
  render() {
    let amounts = this.props.expenses.map((expense) => expense.amount);

    let totalBalance = amounts.reduce((acc, value) => {
      return (acc += value);
    }, 0);

    return (
      <header className="header">
        <p>Balance</p>
        <h2 className="balance">Rs. {totalBalance}</h2>
        <IncomeSpending amounts={amounts}></IncomeSpending>
      </header>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    expenses: state.expenses,
  };
};

export default connect(mapStatetoProps)(Heading);
