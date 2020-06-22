import React from 'react';
import ComponentE from './ComponentE';

//Parent of Component-E
//Grand-Parent of Component-F
function ComponentC() {
  return (
    <div>
      <ComponentE />
    </div>
  );
}

export default ComponentC;
