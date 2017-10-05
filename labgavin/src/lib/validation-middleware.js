let validateCategory = (category) => {
  if (!category.id || !category.name || !category.timestamp || !category.budget) {
    throw new Error('VALIDATION ERROR: category must include id, name, timestamp and budget');
  }
};
  
let validateExpense = (expense) => {
  if (!expense.id || !expense.name || !expense.categoryID) {
    throw new Error('VALIDATION ERROR: expense must include an id, name, and a categoryID');
  }
};