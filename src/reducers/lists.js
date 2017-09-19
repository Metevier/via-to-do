const updateLists = (lists, listItem) => {
  return lists.map(list => {
    if (list.id === listItem.id) {
      return {
        ...list,
        ...listItem
      };
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
    case 'ADD_LIST':
      return [
        action.list,
        ...state
      ];
    case 'DELETE_LIST':
      return state.filter(list => list.id !== action.list.id);
    default:
      return state;
  };
};

export default lists;