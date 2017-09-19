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

export const editList = (listId, { name }) => dispatch => {
  listApi.editList(listId, { name }, () => {
    dispatch({
      type: 'EDIT_LIST',
      list: {
        id: listId,
        name
      }
    });
  });
};

export const addList = (name) => dispatch => {
  listApi.addList(name, (list) => {
    dispatch({
      type: 'ADD_LIST',
      list
    });
  });
};

export const deleteList = (listId) => dispatch => {
  listApi.deleteList(listId, () => {
    dispatch({
      type: 'DELETE_LIST',
      list: {
        id: listId
      }
    });
  });
};