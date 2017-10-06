// let Validate = store => next => action => {


//   let validateCategory = (category) => {
//     if (!category.id || !category.title || !category.timestamp || !category.budget) {
//       throw new Error('VALIDATION ERROR: category must include id, title, timestamp and budget');
//     }
//   };
//   let validateExpense = (expense) => {
//     if (!expense.id || !expense.title || !expense.categoryID) {
//       throw new Error('VALIDATION ERROR: expense must include an id, title, and a categoryID');
//     }
//   };

//   try {
//     let result = next(validateCategory(payload));
//     validateCategory(action.payload);
//     validateExpense(action.payload);
//     return result;
//   } catch (error) {
//     error.action = action;
//     console.error('__ERROR__', error);
//     return error;
//   }

//   if (action.type === 'CATEGORY_CREATE' || action.type === 'CATEGORY_UPDATE'){
//     let result = next(action);
//     validateCategory(action.payload);
//     console.log('category');
//     return result;

//   } else if (action.type === 'EXPENSE_CREATE' || action.type === 'EXPENSE_UPDATE' || action.type === 'EXPENSE_DELETE'){
//     let result = next(action);
//     validateExpense(action.payload);
//     console.log('expense');
//     return result;

//   }

// };

// export default Validate;
