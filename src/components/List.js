import React from 'react';
import '@src/scss/List.scss';

import Item from './Item';

const List = ({ items, listMode, selectList, editable, editList }) => {
  return (
    <ul className='list'>
      {items.map(item => <Item key={item.id} listMode={listMode} selectList={selectList} editable={editable} editItem={editList} {...item}/>)}
    </ul>
  );
};

export default List;