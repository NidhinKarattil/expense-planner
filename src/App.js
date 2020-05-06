import React, { Component } from "react";
import "./App.css";
import Heading from "./Components/Heading";
import Expenses from "./Components/Expenses";
import AddAndRemoveExpense from "./Components/AddAndRemoveExpense";
import ExpenseForm from "./Components/ExpenseForm";

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

export default App;
