import React from 'react';
import { connect } from 'react-redux'
import '@src/scss/App.scss';

import List from './List';
import { getLists } from '@src/actions/listActions';

class UnconnectedApp extends React.Component {
  constructor(props) {
    super(props);
    props.getLists();
  }

  render () {
    return (
      <div className='app'>
       <h1>VIA To-Do</h1>
       <List {...this.props} />
      </div>
    );
  }
};

const mapStateToProps = ({ lists, todos, editable, displayMode }, props) => {
  const listMode = displayMode === 'LISTS';
  return {
    items: listMode ? lists : todos,
    listMode,
    editable
  };
};

const mapDispatchToProps = {
  getLists
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedApp);

export default App;