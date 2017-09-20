import React from 'react';
import { connect } from 'react-redux';

import { editTodo, deleteTodo } from '@src/actions/todoActions';

const TodoItem = ({ id, name, completed, editTodo, deleteTodo, editable }) => {

  const changeName = event => {
    editTodo(id, { name: event.target.value, completed });
  };

  const toggleComplete = event => {
    const isComplete = completed === 1;
    editTodo(id, { name, completed: isComplete ? 0 : 1 });
  };

  const checkboxId = `todo-item-${id}`;

  return (
    <li className='item'>
      <input type='checkbox' id={checkboxId} checked={!!completed} onChange={toggleComplete}/>
      <label htmlFor={checkboxId} className={`${editable ? 'visually-hidden' : ''}`}>
        <span>{name}</span>
        <span className='visually-hidden'>To-Do Item</span>
      </label>
      <input className='change-title' defaultValue={name} onBlur={changeName} hidden={!editable}/>
      <button aria-label={`Delete To-Do Item ${name}`} hidden={!editable} onClick={deleteTodo.bind(null, id)}>X</button>
    </li>
  );
};

const mapDispatchToProps = {
  editTodo,
  deleteTodo
};

export default connect(
  null,
  mapDispatchToProps
)(TodoItem);