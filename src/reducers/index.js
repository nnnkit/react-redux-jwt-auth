import {combineReducers} from 'redux';
import user from './user';
import loading from './loading';

const rootReducer = combineReducers({
  currentUser: user,
  isLoading: loading,
});

export default rootReducer;
