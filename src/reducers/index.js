import { combineReducers } from 'redux';
import lists from './lists';
import todos from './todos';
import editable from './editable';
import displayModes from './displayModes';

const reducer = combineReducers({
  lists,
  todos,
  displayModes
});

export default reducer;