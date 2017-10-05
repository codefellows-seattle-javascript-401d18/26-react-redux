//NEED TO: trace the refs here//
// require('babel-core').transform('code', {
//   plugins: ['transform-object-rest-spread'],
// });
let initialState = {};

export default (state = initialState, action) => {
  let {payload, type} = action;
  let categoryId;
  let categoryExpenses;

  switch(type){
    //for some reason it hates rest and spread?? Hrmmmm//
  case 'CATEGORY_CREATE': return {...state, [payload.id]: []};
  case 'CATEGORY_DELETE': return {...state, [payload.id]: null};
  case 'EXPENSE_CREATE':
    categoryId = payload.categoryId;
    categoryExpenses = state[categoryId];
    return {...state, [categoryId]: [...categoryExpenses, payload]};
  case 'EXPENSE_DELETE':
    return;
  case 'EXPENSE_UPDATE':
    let updateState = state;
    categoryId = payload.categoryId;
    updateState[categoryId] = updateState[categoryId].map(expense => {
      if(expense.id === payload.id) expense = payload;
      return expense;
    });
    return {...updateState};
  default:
    return state;
  }
};
