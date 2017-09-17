const editable = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_EDITABLE':
      return !state;
    default:
      return false;
  };
};

export default editable;