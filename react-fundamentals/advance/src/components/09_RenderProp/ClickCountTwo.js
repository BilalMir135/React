import React from 'react';

function ClickCount({ name, count, incrementCount }) {
  return (
    <div>
      <button onClick={incrementCount}>
        {name} Click {count} Times
      </button>
    </div>
  );
}

export default ClickCount;
