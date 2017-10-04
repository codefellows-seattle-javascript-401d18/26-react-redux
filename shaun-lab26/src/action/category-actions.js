import uuid from 'uuid/v4';

export const categoryCreate = category => {
  category.id = uuid();
  category.timestamp = new Date();
  // category.name = '';
  // category.budget = 0;

  //creating the three different actions for category
  return {
    type: 'CATEGORY_CREATE',
    payload: category,
  };
};

export const categoryUpdate = (category) => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
});

export const categoryDelete = (category) => ({
  type: 'CATEGORY_DELETE',
  payload: category,
});
