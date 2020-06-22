import React, { useContext } from 'react';
import { CountContext } from './context';

//Child of Component-E
//Grand-Child of Component-C
function ComponentF() {
  const counterContext = useContext(CountContext);
  return (
    <div>
      <p>Component-F</p>
      <button onClick={() => counterContext.dispatchContext('INCREMENT')}>
        Increment
      </button>
      <button onClick={() => counterContext.dispatchContext('DECREMENT')}>
        Decrement
      </button>
      <button onClick={() => counterContext.dispatchContext('RESET')}>
        Reset
      </button>
    </div>
  );
}

export default ComponentF;
