'use strict';

// import React from 'react'

intialState: [];

reducer = (state=intialState, action) (
  let {type, payload} = action
    switch(type) {
      case 'CATEGORY_CREATE':
        return [...state, payload]
      case 'CATEGORY_UPDATE':
        return [...state, payload]
      case 'CATEGORY_DELETE':
        return [...state, payload]
      default: return state
    }
)
