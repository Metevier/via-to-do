import React from 'react';
import '@src/scss/List.scss';

import AddItem from './AddItem';
import ListItem from './ListItem';
import TodoItem from './TodoItem';

const List = ({ items, listMode, editable }) => {
  const Item = listMode ? ListItem : TodoItem;
  return (
    <div className='list'>
      <AddItem listMode={listMode} editable={editable}/>
      <ul>
        {items.map(item => <Item key={item.id} listMode={listMode} editable={editable} {...item}/>)}
      </ul>
    </div>
  );
};

export default List;