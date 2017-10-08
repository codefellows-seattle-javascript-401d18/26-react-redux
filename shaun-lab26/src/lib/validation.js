let Validate = store => next => action => {

  let validateCategory = (category) => {
    if(!category.id || !category.title || !category.timestamp || !category.budget) {
      throw new Error('VALIDATION ERROR: Category must include id, title, timestamp and budget');
    }
  };
  let validateExpense = (expense) => {
    if(!expense.id || !expense.title || !expense.CategoryId) {
      throw new Error('VALIDATION ERROR: expense must include id, title and categoryId');
    }
  };

  try {
    let result = next(action);
    validateCategory(action.payload);
    validateExpense(action.payload);
    return result;
  } catch(error) {
    error.action = action;
    console.error('__ERROR__', error);
    return error;
  }

  if(action.type === 'CATEGORY_CREATE'|| action.type === 'CATEGORY_UPDATE') {
    let result = next(action);
    validateCategory(action.payload);
    console.log('category');
    return result;

  } else if (action.type === 'EXPENSE_CREATE' || action.type === 'EXPENSE_DELETE') {
    let result = next(action);
    validateExpense(action.payload);
    console.log('expense');
    return result;
    
};

export default Validate
