let initialState = {};

let validateCategory = (category) => {
  if (!category.id || !category.title || !category.timestamp || !category.budget) {
    throw new Error('VALIDATION ERROR: category must include id, title, timestamp and budget');
  }
};

let validateExpense = (expense) => {
  console.log(expense,'yoyoyooy');
  if (!expense.id || !expense.title || !expense.categoryID) {
    throw new Error('VALIDATION ERROR: expense must include an id, title, and a categoryID');
  }
};

export default (state=initialState, action) => {
  let {type, payload} = action;
  let categoryID, categoryExpense;

  switch (type) {
  case 'CATEGORY_CREATE':
    validateCategory(payload);
    return {...state, [payload.id] : []};
  case 'CATEGORY_DELETE':
    validateCategory(payload);

    return {...state, [payload.id] : undefined};
  case 'EXPENSE_CREATE':
    validateExpense(payload);

    categoryID = payload.categoryID;
    categoryExpense = state[categoryID];
    return {...state, [categoryID]: [...categoryExpense, payload]};

  case 'EXPENSE_UPDATE':
    validateExpense(payload);

    categoryID = payload.categoryID;
    categoryExpense = state[categoryID];
    return {...state, [categoryID]: categoryExpense.map(expense => expense.id === payload.id ? payload : expense)};

  case 'EXPENSE_DELETE':
    validateExpense(payload);

    categoryID = payload.categoryID;
    categoryExpense = state[categoryID];
    return {...state, [categoryID]: categoryExpense.filter(expense => expense.id !== payload.id)};

  default:
    return state;
  }
};
