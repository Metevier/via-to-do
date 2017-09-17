import React from 'react';

const Item = ({ id, name, selectList, listMode }) => {
  const selectItem = event => {
    if (listMode) {
      selectList(id);
    }
  };

  return (
    <li onClick={selectItem}>{name}</li>
  );
};

export default Item;