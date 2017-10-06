import {createStore, applyMiddleware} from 'redux';
import reporter from './redux-reporter';
//^The reporter is our middleware here
import reducer from '../reducer';

export default ()=> createStore(reducer, applyMiddleware(reporter));
