import { createStore, combineReducers } from 'redux';
import { state } from '../reducers/index';

const reducers = combineReducers({
  state
});

export const Store = createStore(reducers);