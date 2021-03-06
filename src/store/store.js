import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import rootReducer from '../reducers/index';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const configureStore = (preloadedState) => createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(ReduxThunk)));

const store = configureStore({});
export default store;
