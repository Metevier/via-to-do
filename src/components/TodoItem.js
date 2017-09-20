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

  const checkboxId = `todo-item-checkbox-${id}`;
  const todoId = `edit-todo-item-${id}`;

  return (
    <li className='item'>
      <input type='checkbox' id={checkboxId} checked={!!completed} onChange={toggleComplete} hidden={editable}/>
      <label htmlFor={checkboxId} className={`${editable ? 'visually-hidden' : ''}`}>
        <span>{name}</span>
        <span className='visually-hidden'>To-Do Item</span>
      </label>
      <label htmlFor={todoId} className='visually-hidden'>
        {`Edit ${name} To-Do Item`}
      </label>
      <input id={todoId} className='change-title' defaultValue={name} onBlur={changeName} hidden={!editable}/>
      <button aria-label={`Delete To-Do Item ${name}`} className='delete-button'
        hidden={!editable} onClick={deleteTodo.bind(null, id)}>Delete</button>
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