import { combineReducers } from 'redux';
import filter from './filter';
import tickets from './tickets';
import sort from './sort';

const rootReducer = combineReducers({ filter, tickets, sort });

export default rootReducer;
