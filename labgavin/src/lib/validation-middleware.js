let validateCategory = (category) => {
  if (!category.id || !category.title || !category.timestamp || !category.budget) {
    throw new Error('VALIDATION ERROR: category must include id, title, timestamp and budget');
  }
};
  
let validateExpense = (expense) => {
  if (!expense.id || !expense.title || !expense.categoryID) {
    throw new Error('VALIDATION ERROR: expense must include an id, title, and a categoryID');
  }
};