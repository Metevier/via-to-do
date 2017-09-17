import React from 'react';
import '@src/scss/List.scss';

import Item from './Item';

const List = ({ items, listMode, selectList }) => {
  return (
    <ul className='list'>
      {items.map(item => <Item key={item.id} listMode={listMode} selectList={selectList} {...item}/>)}
    </ul>
  );
};

export default List;