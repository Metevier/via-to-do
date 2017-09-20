import React from 'react';
import { connect } from 'react-redux';

import { selectList, editList, deleteList } from '@src/actions/listActions';

const ListItem = ({ id, name, editable, selectList, editList, deleteList }) => {
  const selectItem = event => {
    event.preventDefault();

    if (!editable) {
      selectList(id);
    }
  };

  const changeName = event => {
    editList(id, { name: event.target.value });
  };

  const ListElement = editable ?
    <input className='change-title' defaultValue={name} onBlur={changeName}/> :
    <a href='' className='list-title' onClick={selectItem}>
      <span>{name}</span>
      <span className='visually-hidden'>To-Do List</span>
    </a>;

  return (
    <li className='item'>
      {ListElement}
      <button aria-label={`Delete To-Do List ${name}`} hidden={!editable} onClick={deleteList.bind(null, id)}>X</button>
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
