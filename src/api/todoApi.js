import axios from 'axios';

const addTodo = (name, listId, cb) => {
  axios.post(`${URL_PATH}/api/todos`, {
      name,
      lists_id: listId
    },
    {
      params: {
        token: TOKEN
      }
    }
  )
  .then(({ data }) => {
    const { data: todo } = data;
    cb(todo);
  })
  .catch(err => {
    throw new Error(err);
  });
};

const editTodo = (todoId, { name, completed }, cb) => {
  axios.put(`${URL_PATH}/api/todos/${todoId}`, 
    {
      id: todoId,
      name,
      completed
    },
    {
      params: {
        token: TOKEN
      }
    }
  )
  .then(({ data }) => {
    cb();
  })
  .catch(err => {
    throw new Error(err);
  });
};

const deleteTodo = (todoId, cb) => {
  axios.delete(`${URL_PATH}/api/todos/${todoId}`, {
    params: {
      token: TOKEN
    }
  })
  .then(({ data }) => {
    cb();
  })
  .catch(err => {
    throw new Error(err);
  });
};

export default {
  addTodo,
  editTodo,
  deleteTodo
};