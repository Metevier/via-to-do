import listApi from '@src/api/listApi';

export const getLists = () => dispatch => {
  listApi.getLists((lists) => {
    dispatch({
      type: 'GET_LISTS',
      lists
    });
  });
};

export const selectList = listId => dispatch => {
  listApi.getList(listId, (list) => {
    dispatch({
      type: 'SELECT_LIST',
      list
    });
  });
};

export const setListMode = () => {
  return {
    type: 'SET_LIST_MODE'
  };
};