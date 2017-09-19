import React from 'react';
import Filter from './Filter';

const Header = ({ editable, listMode, selectedListName, setListMode, toggleEditable, filter, setFilter }) => {
  const headerText = listMode ? 'To-Do Lists' : selectedListName;
  const editText = editable ? 'Done' : 'Edit';
  return (
    <div>
      <div>
        <button onClick={setListMode} hidden={listMode}>Back</button>
        <h2>{headerText}</h2>
        <button onClick={toggleEditable}>{editText}</button>
      </div>
      <Filter filter={filter} setFilter={setFilter} hidden={listMode}/>
    </div>
  );
};

export default Header;