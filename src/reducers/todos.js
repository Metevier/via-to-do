const initialState = {
  id: null,
  name: null,
  todos: []
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_LIST':
      return action.list;
    case 'SET_LIST_MODE':
      return initialState;
    default:
      return state;
  };
};

export default todos;