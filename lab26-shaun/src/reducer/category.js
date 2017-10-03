// import React from 'react'

// id - a unique identifier
// timestamp - a date from when the category was created
// name - a string that is the name of the category
// budget - a number that is the total amount of money in the category

let intialState = []

export default (state=intialState, action) (
  let {payload, type} = action;
    switch(type) {
      case 'CATEGORY_CREATE':
        return [...state, payload]
      case 'CATEGORY_UPDATE':
        return state.map(category => category.id == payload.id ? payload : category)
      case 'CATEGORY_DELETE':
        return state.filter(category => category.id !== payload.id)
      default: return state
    }
)
