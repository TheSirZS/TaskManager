import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { state } from '../reducers/index';

const reducers = combineReducers({
  state
});

export const Store = createStore(reducers, applyMiddleware(thunk));