import React from 'react';

const Header = ({ editable, listMode, selectedListName, setListMode }) => {
  const headerText = listMode ? 'To-Do Lists' : selectedListName;
  const editText = editable ? 'Done' : 'Edit';
  return (
    <div>
      <button onClick={setListMode} hidden={listMode}>Back</button>
      <h2>{headerText}</h2>
      <button>{editText}</button>
    </div>
  );
};

export default Header;