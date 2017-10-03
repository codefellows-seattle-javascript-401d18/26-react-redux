import {createStore} from 'redux';
import reducer from '../reducer/expense';

export default () => createStore(reducer);
