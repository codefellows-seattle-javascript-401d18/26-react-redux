

let initialState = {};

export default (state = initialState, action) => {
  let {type, payload} = action;


  switch(type){

  case 'CATEGORY_CREATE': return {...state, [payload.id]: []};

  case 'CATEGORY_DELETE': return {...state, [payload.id]: null};

  case 'EXPENSE_CREATE': {

    let categoryExpenses = state[payload.categoryId];
    return {...state, [payload.categoryId]: [...categoryExpenses, payload]};
  }

  case 'EXPENSE_UPDATE': {

    let updateState = state;
    updateState[payload.categoryId] = updateState[payload.categoryId].map(expense => {
      if(expense.id === payload.id) expense = payload;
      return expense;
    });
    return {...updateState};
  }

  case 'EXPENSE_DELETE': {

    let deleteState = state;
    deleteState[payload.categoryId] = deleteState[payload.categoryId].filter(expense => expense.id !== payload.id);
    return {...deleteState};
  }

  default:
    return state;
  }
};
