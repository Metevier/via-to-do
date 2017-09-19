export const toggleEditable = () => {
  return {
    type: 'TOGGLE_EDITABLE'
  };
};

export const setListMode = () => {
  return {
    type: 'SET_LIST_MODE'
  };
};

export const setFilter = filter => {
  return {
    type: `SET_FILTER_${filter}`,
    filter
  }
};