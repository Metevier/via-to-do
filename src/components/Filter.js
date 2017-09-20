import React from 'react';

const Filter = ({ filter, setFilter, hidden }) => {

  return (
    <div className={`${hidden ? 'hidden' : 'filter'}`}>
      <div className='btn-wrapper'>
        <button aria-label='View All To-Dos' onClick={setFilter.bind(null, 'ALL')}>
          All
        </button>
      </div>
      <div className='btn-wrapper'>
        <button aria-label='View Only Complete To-Dos' onClick={setFilter.bind(null, 'COMPLETE')}>
          Complete
        </button>
      </div>
      <div className='btn-wrapper'>
        <button  aria-label='View Only Incomplete To-Dos' onClick={setFilter.bind(null, 'INCOMPLETE')}>
          Incomplete
        </button>
      </div>
    </div>
  );
};

export default Filter;