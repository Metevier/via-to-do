import objAssign from 'object-assign';

const updateLists = (lists, listItem) => {
  return lists.map(list => {
    if (list.id === listItem.id) {
      return objAssign({}, list, listItem);
    }

    return list;
  });
};

const lists = (state = [], action) => {
  switch (action.type) {
    case 'GET_LISTS':
      return action.lists;
    case 'EDIT_LIST':
      return updateLists(state, action.list);
    default:
      return state;
  };
};

export default lists;