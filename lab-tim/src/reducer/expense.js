// this will be the new state
// let newInitialState = {
//   categories: ['rent', 'auto', 'food'],
//   expenses: {
//     rent: [{id, cid, title}],
//     auto: [{id, cid, title}],
//     food: [{id, cid, title}],
//   },
// };
//
// let initialState = {};
//
// export default (state=initialState, action) => {
//   let {type, payload} = action;
//
//   switch (type) {
//   case 'CATEGORY_CREATE': return {...state, [payload.id]: []};
//   case 'CATEGORY_DELETE': return {...state, [payload.id]: []};
//   case 'CARD_CREATE':
//     let {categoryId} = payload
//     let categoryCards = state[categoryId]
//     return {...state, [categoryId]: [...categoryCards, payload]}
//   default: return state;
//
//   }
// };
