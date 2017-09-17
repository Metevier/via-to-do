import React from 'react';

const Item = ({ id, name, selectList, listMode, editable, editItem }) => {
  const selectItem = event => {
    if (listMode && !editable) {
      selectList(id);
    }
  };

  const changeName = event => {
    editItem(id, { name: event.target.value });
  };

  return (
    <li onClick={selectItem}>
      <input defaultValue={name} onBlur={changeName} onSubmit={changeName} disabled={!editable}/>
    </li>
  );
};

export default Item;