import React from 'react';
import '@src/scss/App.scss';

const List = ({items}) => {
  return (
    <ul className='list'>
      {items.map(item => <li>item</li>)}
    </ul>
  );
};

export default List;