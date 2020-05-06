const initialState = {
  expenses: [
    { id: 1, name: "purchase1", amount: 1000, date: "28/04/2020" },
    { id: 2, name: "purchase2", amount: 50, date: "28/04/2020" },
    { id: 3, name: "purchase3", amount: -10, date: "28/04/2020" },
    { id: 4, name: "purchase4", amount: 10, date: "28/04/2020" },
  ],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [action.payload, ...state.expenses],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => action.payload !== expense.id
        ),
      };
    default:
      return state;
  }
};
