import { combineReducers } from 'redux';
import lists from './lists';
import todos from './todos';
import editable from './editable';
import displayMode from './displayMode';

const reducer = combineReducers({
  lists,
  todos,
  editable,
  displayMode
});

export default reducer;