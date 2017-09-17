const lists = (state = [], action) => {
  switch (action.type) {
    case 'GET_LISTS':
      return action.lists;
    default:
      return state;
  };
};

export default lists;