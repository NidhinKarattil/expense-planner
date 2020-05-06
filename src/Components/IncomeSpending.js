import React from "react";

export default function IncomeSpending({ amounts }) {
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, val) => (acc += val), 0);
  const spendings =
    amounts
      .filter((amount) => amount < 0)
      .reduce((acc, val) => (acc += val), 0) * -1;

  return (
    <div className="spendings">
      <p className="income">Income: Rs. {income} </p>
      <p className="spending">Spending: Rs. {spendings} </p>
    </div>
  );
}
