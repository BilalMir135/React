import React, { useContext } from 'react';
import ComponentC from './ComponentC';
import { NameContext, AgeContext } from './Context';

//using context with hooks
function ComponentB() {
  const name = useContext(NameContext);
  const age = useContext(AgeContext);
  return (
    <div>
      <h1>Component B</h1>
      <div>
        Name: {name} Age: {age}
      </div>
      <ComponentC />
    </div>
  );
}

export default ComponentB;
