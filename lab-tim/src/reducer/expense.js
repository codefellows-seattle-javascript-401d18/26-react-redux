// this will be the new state
// let newInitialState = {
//   categories: ['rent', 'auto', 'food'],
//   expenses: {
//     rent: [{id, cid, title}],
//     auto: [{id, cid, title}],
//     food: [{id, cid, title}],
//   },
// };

let initialState = {};

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch (type) {
  case 'CATEGORY_CREATE':
    return {...state, [payload.id]: []};

  case 'CATEGORY_DELETE':
    return {...state, [payload.id]: undefined};

  case 'EXPENSE_CREATE': {
    // line below is same thing as
    // let categoryId = payload.categoryId;
    let {categoryId} = payload;
    let categoryExpenses = state[categoryId];
    return {...state, [categoryId]: [...categoryExpenses, payload]};
  }

  case 'EXPENSE_UPDATE':
    return state;

  case 'EXPENSE_DELETE':
    return state;

  default:
    return state;
  }
};
