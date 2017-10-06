import uuid from 'uuid/v4';


///  //creating the three different actions for expenses

export const expenseCreate = expense => {
  expense.id = uuid();
  expense.timestamp = new Date();
  return {
    type: 'EXPENSE_CREATE',
    payload: expense,
  };
};

export const expenseUpdate = expense => {
  return {
    type: 'EXPENSE_UPDATE',
    payload: {...expense},
  };
};

export const expenseDelete = expense => {
  return {
    type: 'EXPENSE_DELETE',
    payload: expense,
  };
};
