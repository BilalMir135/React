import React from 'react';
import ComponentF from './ComponentF';

//Parent of Component-F
//Child of Component-C
function ComponentE() {
  return (
    <div>
      <ComponentF />
    </div>
  );
}

export default ComponentE;
