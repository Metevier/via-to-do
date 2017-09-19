import axios from 'axios';

const addTodo = (name, cb) => {
  axios.post(`${URL_PATH}/api/todos`, {
    params: {
      token: TOKEN
    },
    data: {
      name
    }
  })
  .then(({ data }) => {
    cb(todo);
  })
  .catch(err => {
    throw new Error(err);
  });
};

const editTodo = (todoId, { name }, cb) => {
  axios.put(`${URL_PATH}/api/todos/${todoId}`, 
    {
      id: todoId,
      name
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
  axios.put(`${URL_PATH}/api/todos/${todoId}`, {
    params: {
      token: TOKEN
    },
    data: {
      id: todoId
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