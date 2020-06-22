import React, { useContext } from 'react';
import { CountContext } from './context';

//Child of Component-D
function ComponentD() {
  const counterContext = useContext(CountContext);
  return (
    <div>
      <p>Component-D</p>
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

export default ComponentD;
