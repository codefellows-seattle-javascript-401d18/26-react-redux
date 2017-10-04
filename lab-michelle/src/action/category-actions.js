//Where we export the actions//
//Seems like maybe we should modularize for the expense functions but I'm gonna keep it in one for now//

import uuid from 'uuid/v4';

export const categoryCreate = category => {
  category.id = uuid();
  category.timestamp = new Date();
  return {
    type: 'CATEGORY_CREATE',
    payload: category,
  };
};

export const categoryUpdate = category => {
  return {
    type: 'CATEGORY_UPDATE',
    payload: category,
  };
};

export const categoryDestroy = category => {
  return {
    type: 'CATEGORY_DESTROY',
    payload: category,
  };
};

export const expenseCreate = expense => {
  return {
    type: 'EXPENSE_CREATE',
    payload: expense,
  };
};

export const expenseUpdate = expense => {
  return {
    type: 'EXPENSE_UPDATE',
    payload: expense,
  };
};

export const expenseDelete = expense => {
  return {
    type: 'EXPENSE_DELETE',
    payload: expense,
  };
};
