import {combineReducers} from 'redux';
import expenseReducer from './expenses';
import categoryReducer from './category';

export default combineReducers({
  categories: categoryReducer,
  expenses: expenseReducer,
});
