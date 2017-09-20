import React from 'react';
import '@src/scss/Header.scss';

import Filter from './Filter';

const Header = ({ editable, listMode, selectedListName, setListMode, toggleEditable, filter, setFilter }) => {
  const headerText = listMode ? 'To-Do Lists' : selectedListName;
  const editText = editable ? 'Done' : 'Edit';
  return (
    <div className='header'>
      <div className='info'>
        <div className='button-wrapper'>
          <button className='info-button' onClick={setListMode} hidden={listMode || editable} aria-label='Go Back to Lists'>Back</button>
        </div>
        <h2 className='title'>{headerText}</h2>
        <div className='button-wrapper'>
          <button className='info-button' onClick={toggleEditable} aria-label={`Edit ${listMode ? 'List' : 'To-Do'} Items`}>{editText}</button>
        </div>
      </div>
      <Filter filter={filter} setFilter={setFilter} hidden={listMode}/>
    </div>
  );
};

export default Header;