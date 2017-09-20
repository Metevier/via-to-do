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

  const listId = `edit-list-item-${id}`;

  return (
    <li className='item'>
      <label htmlFor={listId} className='visually-hidden'>
        {`Edit ${name} List Item`}
      </label>
      <input id={listId} className='change-title' defaultValue={name} onBlur={changeName} hidden={!editable}/>
      <a href='' className={`${editable ? 'hidden' : 'list-title'}`} onClick={selectItem}>
        <span>{name}</span>
        <span className='visually-hidden'>To-Do List</span>
      </a>
      <button aria-label={`Delete To-Do List ${name}`} className='delete-button'
        hidden={!editable} onClick={deleteList.bind(null, id)}>Delete</button>
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
