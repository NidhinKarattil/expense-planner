const initialState = {
  expenses: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ALL_EXPENSES":
      return {
        ...state,
        expenses: [...action.payload, ...state.expenses],
      };
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
