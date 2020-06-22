import React from 'react';
import ComponentD from './ComponentD';

//Parent of Component-D
function ComponentB() {
  return (
    <div>
      <ComponentD />
    </div>
  );
}

export default ComponentB;
