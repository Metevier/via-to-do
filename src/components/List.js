import React from 'react';
import '@src/scss/List.scss';

const List = ({items}) => {
  return (
    <ul className='list'>
      {items.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  );
};

export default List;