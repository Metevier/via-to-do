import React from 'react';
import { connect } from 'react-redux'
import '@src/scss/App.scss';

import Header from './Header';
import List from './List';
import { getLists, selectList, editList } from '@src/actions/listActions';
import { toggleEditable, setFilter, setListMode } from '@src/actions/displayModeActions';


class UnconnectedApp extends React.Component {
  constructor(props) {
    super(props);
    props.getLists();
  }

  render () {
    return (
      <div className='app'>
       <h1>VIA To-Do</h1>
       <Header {...this.props} />
       <List {...this.props} />
      </div>
    );
  }
};

const filterTodos = (todos, filter) => {
  const showCompleteTodos = filter === 'COMPLETE';
  return todos.filter(item => !!item.complete === showCompleteTodos);
};

const mapStateToProps = ({ lists, todos, displayModes }, props) => {
  const { listMode, editable, filter } = displayModes
  const { todos: todoItems, name: selectedListName } = todos;
  
  let items = [];
  if (listMode) {
    items = lists;
  } else {
    items = filter === 'ALL' ? todoItems : filterTodos(todoItems, filter);
  }

  return {
    items,
    listMode,
    editable,
    selectedListName,
    filter
  };
};

const mapDispatchToProps = {
  getLists,
  selectList,
  editList,
  setListMode,
  toggleEditable,
  setFilter
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedApp);

export default App;