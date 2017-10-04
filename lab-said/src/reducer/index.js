import {combineReducers} from 'redux';
import expensesReducer from './expense';
import categoriesReducer from './category';

export default combineReducers({
  categories: categoriesReducer,
  expenses: expensesReducer,
});
