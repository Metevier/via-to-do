const displayMode = (state = 'LISTS', action) => {
  switch (action.type) {
    case 'SELECT_LIST':
      return 'TODOS';
    case 'SET_LIST_MODE':
      return 'LISTS';
    default:
      return state;
  };
};

export default displayMode;