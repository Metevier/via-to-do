export const toggleEditable = () => {
  return {
    type: 'TOGGLE_EDITABLE'
  };
};

export const setFilter = filter => {
  return {
    type: `SET_FILTER_${filter}`,
    filter
  }
};