import React from 'react';

const Filter = ({ filter, setFilter, hidden }) => {

  return (
    <div hidden={hidden}>
      <button onClick={setFilter.bind(null, 'ALL')}>
        All
      </button>
      <button onClick={setFilter.bind(null, 'COMPLETE')}>
        Complete
      </button>
      <button onClick={setFilter.bind(null, 'INCOMPLETE')}>
        Incomplete
      </button>
    </div>
  );
};

export default Filter;