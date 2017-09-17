import React from 'react';
import { connect } from 'react-redux'
import '@src/scss/App.scss';

import Header from './Header';
import List from './List';
import { getLists, selectList, setListMode, editList } from '@src/actions/listActions';
import { toggleEditable } from '@src/actions/editableActions';


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

const mapStateToProps = ({ lists, todos, editable, displayMode }, props) => {
  const listMode = displayMode === 'LISTS';
  const { todos: todoItems, name: selectedListName } = todos;
  return {
    items: listMode ? lists : todoItems,
    listMode,
    editable,
    selectedListName
  };
};

const mapDispatchToProps = {
  getLists,
  selectList,
  editList,
  setListMode,
  toggleEditable,
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedApp);

export default App;