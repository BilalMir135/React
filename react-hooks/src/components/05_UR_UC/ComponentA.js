import React, { useContext } from 'react';
import { CountContext } from './context';

//having no child
function ComponentA() {
  const counterContext = useContext(CountContext);
  return (
    <div>
      <p>Component-A</p>
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

export default ComponentA;
