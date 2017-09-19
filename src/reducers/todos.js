const initialState = {
  id: null,
  name: null,
  todos: []
};

const updateTodos = (todos, todoItem) => {
  return todos.map(todo => {
    if (todo.id === todoItem.id) {
      return {
        ...todo,
        ...todoItem
      };
    }

    return todo;
  });
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_LIST':
      return action.list;
    case 'SET_LIST_MODE':
      return initialState;
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          action.todo,
          ...state.todos
        ]
      };
    case 'EDIT_TODO':
      return {
        ...state,
        todos: updateTodos(state.todos, action.todo)
      }
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.todo.id)
      };
    default:
      return state;
  };
};

export default todos;