import React from 'react';
import withCounter from './withCounter';

function ClickCount({ name, count, incrementCount }) {
  return (
    <div>
      <button onClick={incrementCount}>
        {name} Click {count} Times
      </button>
    </div>
  );
}

//as we pass all props from withCounter so we can see name rendering on screen
//because the ClickCount is rendering on withCounter

//adding counter functionality in it by use HOC
export default withCounter(ClickCount, 5);
