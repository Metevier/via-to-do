import React from 'react';
import { connect } from 'react-redux'
import '@src/scss/App.scss';

import List from './List';

const UnconnectedApp = (props) => {
  return (
    <div className='app'>
     <h1>VIA To-Do</h1>
     <List {...props} />
    </div>
  );
};;

const mapStateToProps = ({ lists, todos, editable, displayMode }, props) => {
  const listMode = displayMode === 'LISTS';
  return {
    items: listMode ? lists : todos,
    listMode,
    editable
  };
};

const App = connect(
  mapStateToProps
)(UnconnectedApp);

export default App;