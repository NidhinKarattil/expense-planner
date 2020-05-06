import React, { Component } from "react";
import "./App.css";
import Heading from "./Components/Heading";
import Expenses from "./Components/Expenses";
import AddAndRemoveExpense from "./Components/AddAndRemoveExpense";
import ExpenseForm from "./Components/ExpenseForm";
import { connect } from "react-redux";

class App extends Component {
  state = {
    showForm: false,
    expenseType: null,
  };
  expenseBtnHandler = (type) => {
    this.setState({
      showForm: true,
      expenseType: type,
    });
  };
  componentDidMount() {
    console.log("didmount App");
    let savedExpenses = JSON.parse(localStorage.getItem("expenses"));
    this.props.addExpense(savedExpenses);
    console.log(savedExpenses);
  }
  componentDidUpdate() {
    console.log(this.props.expenses);
    localStorage.setItem("expenses", JSON.stringify(this.props.expenses));
    console.log("didupdate App");
  }
  render() {
    return (
      <div className="App">
        <Heading />
        <Expenses></Expenses>
        {this.state.showForm ? (
          <ExpenseForm
            type={this.state.expenseType}
            clicked={() => this.setState({ showForm: false })}
          ></ExpenseForm>
        ) : null}
        <AddAndRemoveExpense
          clicked={(action) => this.expenseBtnHandler(action)}
        ></AddAndRemoveExpense>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};

const mapDidspatchToProps = (dispatch) => {
  return {
    addExpense: (newExpense) =>
      dispatch({ type: "ADD_ALL_EXPENSES", payload: newExpense }),
  };
};

export default connect(mapStateToProps, mapDidspatchToProps)(App);
