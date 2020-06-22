import React, { useReducer } from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import { CountContext } from './context';
import { CountReducer } from './reducer';

function Main() {
  const [count, dispatch] = useReducer(CountReducer, 0);
  return (
    <div>
      <p>Count-{count}</p>
      <CountContext.Provider
        value={{ countContext: count, dispatchContext: dispatch }}
      >
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </div>
  );
}

export default Main;
