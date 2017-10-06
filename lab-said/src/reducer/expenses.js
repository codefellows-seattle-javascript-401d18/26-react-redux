// let initialState = {};
//
// export default (state=initialState, action) => {
//   let {type, payload} = action;
//
//   switch (type) {
//   case 'CATEGORY_CREATE':
//     return {...state, [payload.id] : []};
//
//   case 'CATEGORY_DELETE':
//     return {...state, [payload.id] : undefined};
//
//   case 'EXPENSE_CREATE':
//     let {categoryID} = payload;
//     let categoryExpense = state[categoryID];
//     return {...state, [categoryID]: [...categoryExpense, payload]};
//
//   case 'EXPENSE_UPDATE':
//     categoryID = payload.categoryID;
//     categoryExpense = state[categoryID];
//     return {...state, [categoryID]: categoryExpense.map(expense => expense.id === payload.id ? payload : expense)};
//
//   case 'EXPENSE_DELETE':
//     categoryID = payload.categoryID;
//     categoryExpense = state[categoryID];
//     return {...state, [categoryID]: categoryExpense.filter(expense => expense.id !== payload.id)};
//
//   default:
//     return state;
//   }
// };


let expenseValidate = expense => {
  let {id, categoryId, title, content, timestamp} = expense
  if(!id || !categoryId || !title || !content || !timestamp) {
    throw new Error('VALIDATION FAILED: Card must contain id, catId, title, ...')
  }
}

let initialState = {}

export default (state=initialState, action) => {
  let {type, payload} = action

  switch(type) {
    case 'CATEGORY_CREATE':
      return {...state, [payload.id]: []}
    case 'CATEGORY_DELETE':
      return {...state, [payload.id]: null}

    case 'CARD_CREATE':
      expenseValidate(payload)
      let categoryCards = state[payload.categoryId]
      return {...state, [payload.categoryId]: [...categoryCards, payload]}

    case 'CARD_UPDATE':
      expenseValidate(payload)
      let updateState = state
      updateState[payload.categoryId] = updateState[payload.categoryId].map(expense => {
        if(expense.id === payload.id) expense = payload
        return expense
      })
      return {...updateState}

    case 'CARD_DELETE':
      expenseValidate(payload)
      let deleteState = state
      deleteState[payload.categoryId] = deleteState[payload.categoryId].filter(expense => expense.id !== payload.id)
      return {...deleteState}
    default: return state
  }
}
