import axios from 'axios';

const getLists = (cb) => {
  axios.get(`${URL_PATH}/api/lists`, {
      params: {
        token: TOKEN
      }
    })
    .then(({ data }) => {
      const { data: lists } = data;
      cb(lists);
    })
    .catch(err => {
      throw new Error(err);
    });
};

const getList = (listId, cb) => {
  axios.get(`${URL_PATH}/api/lists/${listId}`, {
      params: {
        token: TOKEN
      }
    })
    .then(({ data }) => {
      const { data: list } = data;
      cb(list);
    })
    .catch(err => {
      throw new Error(err);
    });
};

const addList = (name, cb) => {
  axios.post(`${URL_PATH}/api/lists`, {
    params: {
      token: TOKEN
    },
    data: {
      name
    }
  })
  .then(({ data }) => {
    console.log(data);
    const { data: list } = data;
    cb(list);
  })
  .catch(err => {
    throw new Error(err);
  });
};

const editList = (listId, { name }, cb) => {
  console.log(name);
  axios.put(`${URL_PATH}/api/lists/${listId}`, 
    {
      id: listId,
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

const deleteList = (listId, cb) => {
  axios.put(`${URL_PATH}/api/lists/${listId}`, {
    params: {
      token: TOKEN
    },
    data: {
      id: listId
    }
  })
  .then(({ data }) => {
    console.log(data);
    const { data: list } = data;
    cb(list);
  })
  .catch(err => {
    throw new Error(err);
  });
};

export default {
  getLists,
  getList,
  addList,
  editList,
  deleteList
};