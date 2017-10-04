let intialState = {};

export default (state=intialState, action) => {
  let {type, payload} = action;
  let categoryId, categoryExpense;


  switch (type) {
  case 'CATEGORY_CREATE':
    return{...state, [payload.id] : []};
  case 'CATEGORY_DELETE':
    return{...state, [payload.id] : undefined};
  case 'EXPENSE_CREATE':
    categoryId = payload.categoryId;
    categoryExpense = state[categoryId];
    return {...state, [categoryId]: [...categoryExpense, payload]};

  case 'EXPENSE_UPDATE':
    categoryId = payload.categoryId;
    categoryExpense = state[categoryId];
    return {...state, [categoryId]:
categoryExpense.map(expense => expense.id === payload.id ?payload : expense )};

  case 'EXPENSE_DELETE':
    categoryId = payload.categoryId;
    categoryExpense = state[categoryId];
    return {...state, [categoryId]:
categoryExpense.filter(expense => expense.id !== payload.id)};

  default:
    return state;

  }
};
