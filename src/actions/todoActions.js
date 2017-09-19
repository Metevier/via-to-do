import todoApi from '@src/api/todoApi';

export const editTodo = (todoId, { name, completed }) => dispatch => {
  todoApi.editTodo(todoId, { name, completed}, () => {
    dispatch({
      type: 'EDIT_TODO',
      todo: {
        id: todoId,
        name,
        completed
      }
    });
  });
};

export const addTodo = (name) => (dispatch, getState) => {
  const { todos } = getState();
  todoApi.addTodo(name, todos.id, (todo) => { // todo.id is the lists_id
    dispatch({
      type: 'ADD_TODO',
      todo: {
        ...todo,
        completed: parseInt(todo.completed) // completed is returned as a string, but we need an int
      }
    });
  });
};

export const deleteTodo = (todoId) => dispatch => {
  todoApi.deleteTodo(todoId, () => {
    dispatch({
      type: 'DELETE_TODO',
      todo: {
        id: todoId
      }
    });
  });
};