//NEED TO: trace the refs here//

let initialState = {};

export default (state = initialState, action) => {
  let {payload, type} = action;

  switch(type){
  case 'EXPENSE_CREATE':
    return {...state, [payload.id]: []};
  case 'EXPENSE_UPDATE':
    let {categoryId} = payload;
    let categoryExpenses = state[expenseId];
    return {...state, [expenseId]: [...categoryExpenses, payload]};
  case 'EXPENSE_DELETE':
    return {...state, [payload.id]: []};
  default:
    return state;
  }
};
