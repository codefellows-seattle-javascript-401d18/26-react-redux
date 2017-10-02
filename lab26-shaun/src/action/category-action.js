import uuid from 'uuid/v4'


// action creaters are helper fucntions to create new actions
// you should use action creaters thought the App
// you should never hard code literals in your app
export const categoryCreate = (category) => {
  category.id = uuid()
  category.timestamp = new Date()
  return {
    type: 'CATEGORY_CREATE',
    payload: category,
  }
}

export const categoryUpdate = (category) => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
})

export const categoryDelete = (category) => ({
  type: 'CATEGORY_DELETE',
  payload: category,
})
