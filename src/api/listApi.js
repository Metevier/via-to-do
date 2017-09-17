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

export default {
  getLists,
  getList
};