import {combineReducers} from 'redux';
import expenseReducer from './expense';
import categoryReducer from './category';

export default combineReducers({
  expense: expenseReducer,
  category: categoryReducer,
});
