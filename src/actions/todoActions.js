import todoApi from '@src/api/todoApi';

export const editTodo = (todoId, { name, completed }) => dispatch => {
  todoApi.editTodo(todoId, { name }, () => {
    dispatch({
      type: 'EDIT_TODO',
      Todo: {
        id: todoId,
        name,
        completed
      }
    });
  });
};

export const addTodo = (name) => dispatch => {
  todoApi.addTodo(name, (todo) => {
    dispatch({
      type: 'ADD_TODO',
      todo
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