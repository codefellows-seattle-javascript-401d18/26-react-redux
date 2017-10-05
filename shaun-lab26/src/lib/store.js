import {createStore} from 'redux';
import reporter from './redux-reporter';
import reducer from '../reducer';

export default () => createStore(reducer);
