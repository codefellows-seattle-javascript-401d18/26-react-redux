let initialState = {};

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch (type) {
  case 'CATEGORY_CREATE':
    return {...state, [payload.id] : []};

  case 'CATEGORY_DELETE':
    return {...state, [payload.id] : undefined};

  case 'EXPENSE_CREATE':
    let {categoryId} = payload;
    let categoryExpense = state[categoryId];
    return {...state, [categoryId]: [...categoryExpense, payload]};

  case 'EXPENSE_UPDATE':
    categoryId = payload.categoryId;
    categoryExpense = state[categoryId];
    return {...state, [categoryId]: categoryExpense.map(expense => expense.id === payload.id ? payload : expense)};

  case 'EXPENSE_DELETE':
    categoryId = payload.categoryId;
    categoryExpense = state[categoryId];
    return {...state, [categoryId]: categoryExpense.filter(expense => expense.id !== payload.id)};

  default:
    return state;
  }
};
