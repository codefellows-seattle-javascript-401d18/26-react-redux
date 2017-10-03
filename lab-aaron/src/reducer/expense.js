let intialState = [];

export default (state=intialState, action) => {
  let {payload, type} = action;

  switch(type) {
    case 'EXPENSE_CREATE':
      return [...state, payload];
    case 'EXPENSE_UPDATE':
      return state.map(expense => expense.id === payload.id ? payload: expense);
    case 'EXPENSE_DELETE':
      return state.filter(expense => expense.id !== payload.id);
    default:
      return state;
   }
};
