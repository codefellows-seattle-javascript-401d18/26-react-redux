let expenseValidate = expense => {
  let {id, categoryId, title, content, timestamp} = expense;
  if(!id || !categoryId || !title || !content || !timestamp) {
    throw new Error('Validation failed, your expense must contain an id, categoryId, title, etc');
  }
};

let initialState = {};

export default (state = initialState, action) => {
  let {payload, type} = action;
  // let categoryId;
  // let categoryExpenses;
  // let updateState;

  switch(type){
    //for some reason it hates rest and spread?? Hrmmmm//
  case 'CATEGORY_CREATE': return {...state, [payload.id]: []};

  case 'CATEGORY_DELETE': return {...state, [payload.id]: null};

  case 'EXPENSE_CREATE': {
    expenseValidate(payload);
    let categoryExpense = state[payload.categoryId];
    return {...state, [payload.categoryId]: [...categoryExpense, payload]};
  }

  case 'EXPENSE_UPDATE': {
    expenseValidate(payload);
    let updateState = state;
    updateState[payload.categoryId] = updateState[payload.categoryId].map(expense => {
      if(expense.id === payload.id) expense = payload;
      return expense;
    });
    return {...updateState};
  }

  case 'EXPENSE_DELETE': {
    expenseValidate(payload);
    let deleteState = state;
    deleteState[payload.categoryId] = deleteState[payload.categoryId].filter(card => card.id !== payload.id);
    return {...deleteState};
  }

  default:
    return state;
  }
};
