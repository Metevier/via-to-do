import React from 'react';
import { connect } from 'react-redux';

import { selectList, editList, deleteList } from '@src/actions/listActions';

const ListItem = ({ id, name, editable, selectList, editList, deleteList }) => {
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
      <button hidden={!editable} onClick={deleteList.bind(null, id)}>X</button>
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
