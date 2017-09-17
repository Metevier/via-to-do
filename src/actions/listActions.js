import listApi from '@src/api/listApi';

export const getLists = () => dispatch => {
  listApi.getLists((lists) => {
    dispatch({
      type: 'GET_LISTS',
      lists
    });
  });
};