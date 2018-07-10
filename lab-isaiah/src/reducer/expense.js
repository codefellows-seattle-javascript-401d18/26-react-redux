let initialState = {};

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type) {
  case 'CATEGORY_CREATE': return {...state, [payload.id]: []};
  case 'CATEGORY_DELETE': return {...state, [payload.id]: null};
  case 'EXPENSE_DELETE': return {...state, [payload.categoryId]: state[payload.categoryId].filter(item => {
    return payload.id !== item.id;
  })};
  case 'EXPENSE_UPDATE': return {...state, [payload.categoryId]: state[payload.categoryId].map(item => {
    return payload.id === item.id ? payload : item;
  })};
  case 'EXPENSE_CREATE': {
    let {categoryId} = payload;
    let categoryExpenses = state[categoryId];
    return {...state, [categoryId]: [...categoryExpenses, payload]};
  }
  default: return state;
  }
};
