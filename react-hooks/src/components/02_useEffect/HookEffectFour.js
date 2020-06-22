import React, { useState } from 'react';
import HookMouse from './HookMouse';

//useEffect with cleanUp
function HookEffectFour() {
  const [display, setDisplay] = useState(true);

  //when we toggle and unmount component we have to remove the effect listener of HookMouse by using cleanUp function
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <HookMouse />}
    </div>
  );
}

export default HookEffectFour;
