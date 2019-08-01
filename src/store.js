import {createStore, combineReducers} from 'redux';
import user from './reducers/user';
import loading from './reducers/loading';

const rootReducer = combineReducers({
  currentUser: user,
  isLoading: loading,
});

const store = createStore(rootReducer);

export default store;
