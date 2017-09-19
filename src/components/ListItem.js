import React from 'react';
import { connect } from 'react-redux';

import { selectList, editList, deleteList } from '@src/actions/listActions';

const ListItem = ({ id, name, selectList, editList, editable }) => {
  const selectItem = event => {
    if (!editable) {
      selectList(id);
    }
  };

  const changeName = event => {
    editList(id, { name: event.target.value });
  };

  return (
    <li onClick={selectItem}>
      <input defaultValue={name} onBlur={changeName} onSubmit={changeName} disabled={!editable}/>
    </li>
  );
};

const mapDispatchToProps = {
  selectList,
  editList,
  deleteList
};

export default connect(
  null,
  mapDispatchToProps
)(ListItem);
