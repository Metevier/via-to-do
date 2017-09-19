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

  return (
    <li>
      <input type='checkbox' checked={!!completed} onChange={toggleComplete}/>
      <input defaultValue={name} onBlur={changeName} onSubmit={changeName} disabled={!editable}/>
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