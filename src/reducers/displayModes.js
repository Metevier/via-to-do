const initialState = {
  listMode: true,
  editable: false,
  filter: 'ALL'
};

const displayMode = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_LIST':
      return {
        ...state,
        listMode: false
      }
    case 'SET_LIST_MODE':
      return {
        ...state,
        listMode: true
      };
    case 'TOGGLE_EDITABLE':
      return {
        ...state,
        editable: !state.editable
      }
    case 'SET_FILTER_ALL':
    case 'SET_FILTER_COMPLETE':
    case 'SET_FILTER_INCOMPLETE':
      return {
        ...state,
        filter: action.filter
      }
    default:
      return state;
  };
};

export default displayMode;