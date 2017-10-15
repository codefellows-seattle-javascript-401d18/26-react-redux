import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import reporter from './redux-reporter.js';
import Validate from './validation-middleware.js';

export default () => createStore(reducer, applyMiddleware(reporter));
