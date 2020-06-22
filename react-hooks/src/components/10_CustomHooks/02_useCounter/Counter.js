import React, { useState } from 'react';
import useCounter from '../../../hooks/useCounter';

function Counter() {
  const [count, inrement, decrement, reset] = useCounter();
  return (
    <div>
      <h1>Count-{count}</h1>
      <button onClick={inrement}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
