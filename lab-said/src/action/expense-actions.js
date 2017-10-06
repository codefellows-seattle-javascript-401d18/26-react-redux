import uuid from 'uuid/v4';

export const expenseCreate = (expense) => {
  return {
    type: 'EXPENSE_CREATE',
    payload: {...expense, id: uuid(), timestamp: new Date()},
  };
};

export const expenseUpdate = (expense) => ({
  type: 'EXPENSE_UPDATE',
  payload: {...expense},
});

export const expenseDelete = (expense) => ({
  type: 'EXPENSE_DELETE',
  payload: {...expense},
});
