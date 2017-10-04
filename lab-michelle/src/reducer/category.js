let initialState = {};

export default (state = initialState, action) => {
  let {payload, type} = action;

  switch(type) {
  case 'CATEGORY_CREATE':
    return [...state, payload];
  case 'CATEGORY_UPDATE':
    return state.map(category => category.id === payload.id ? payload : category);
  case 'CATEGORY_DESTROY':
    return state.filter(category => category.id !== payload.id);
  default:
    return state;
  }
};



// Instructions:
// create a category reducer in your your reducer directory
// this reducer should support the following interactions
// CATEGORY_CREATE
// CATEGORY_UPDATE
// CATEGORY_DESTROY
