import React, { Component } from "react";
import { connect } from "react-redux";

class Expenseform extends Component {
  state = {
    id: 0,
    name: "",
    amount: "",
    date: "",
    isNameValid: false,
    isAmountValid: false,
  };

  nameChangeHandler = (e) => {
    if (e.target.value === "") {
      this.setState({ name: e.target.value, isNameValid: false });
      return;
    }
    this.setState({ name: e.target.value, isNameValid: true });
  };
  amountChangeHandler = (e) => {
    if (e.target.value <= 0) {
      this.setState({ amount: e.target.value, isAmountValid: false });
      return;
    }
    this.setState({ amount: e.target.value, isAmountValid: true });
  };

  submitHandler = (e) => {
    e.preventDefault();
    let signedAmount =
      this.props.type === "spending"
        ? this.state.amount * -1
        : this.state.amount * 1;

    let newExpense = {
      id: Math.floor(Math.random() * 100000000),
      name: this.state.name,
      amount: signedAmount,
      date: this.state.date,
    };

    this.props.addExpense(newExpense);
    this.setState({
      name: "",
      amount: "",
      isNameValid: false,
      isAmountValid: false,
    });

    this.props.clicked();
  };
  componentDidMount() {
    console.log("didmount form");
  }

  componentDidUpdate() {
    console.log("didupdate form");
  }
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>Details</label>
          <input
            type="text"
            value={this.state.name}
            placeholder="Add expenses"
            onChange={this.nameChangeHandler}
          ></input>
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={this.state.amount}
            placeholder="Amount"
            onChange={this.amountChangeHandler}
          ></input>
        </div>

        <button disabled={!(this.state.isNameValid & this.state.isAmountValid)}>
          Add
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    expenseArray: state.expenses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addExpense: (newExpense) =>
      dispatch({ type: "ADD_EXPENSE", payload: newExpense }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Expenseform);
