let initialState = {};

let validateCategory = (category) => {
  if(!category.id || !category.title || !category.timestamp || !category.budget) {
    throw new Error('Validation error: category must include id, title, timestamp and budget');
  }
};

let validateExpense = (expense) => {
  console.log(expense);
  if(!expense.id || !expense.title || !expense.categoryId) {
    throw new Error('Validation error: expense must include an id, title and a categoryId');
  }
};

export default (state=initialState, action) => {
  let {type, payload} = action;
  let categoryId, categoryExpense;

  switch (type) {
  case 'CATEGORY_CREATE':
    validateCategory(payload);
    return {...state, [payload.id] : []};

  case 'CATEGORY_DELETE':
    validateCategory(payload);
    return {...state, [payload.id] : undefined};

  case 'EXPENSE_CREATE':
    validateExpense(payload);
    categoryId = payload.categoryId;
    categoryExpense = state[categoryId];
    return {...state, [categoryId]: [...categoryExpense, payload]};

  case 'EXPENSE_UPDATE':
    validateExpense(payload);
    categoryId = payload.categoryId;
    categoryExpense = state[categoryId];
    return {...state, [categoryId]: categoryExpense.map(expense => expense.id === payload.id ? payload : expense)};

  case 'EXPENSE_DELETE':
    validateExpense(payload);
    categoryId = payload.categoryId;
    categoryExpense = state[categoryId];
    return {...state, [categoryId]: categoryExpense.filter(expense => expense.id !== payload.id)};

  default:
    return state;
  }
};
