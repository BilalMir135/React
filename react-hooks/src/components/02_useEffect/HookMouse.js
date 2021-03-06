import React, { useState, useEffect } from 'react';

//useEffect only once
function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log('Log Mouse Position');
    setX(e.clientX);
    setY(e.clientY);
  };

  //this effect will run or every mouse move
  //to avoid that we use empty [] as second argument so useEffect will run only on initial render
  useEffect(() => {
    console.log('Use Effect');
    window.addEventListener('mousemove', logMousePosition);

    //this cleanup function we remove event on unmount
    return () => {
      console.log('CleanUp Function');
      window.removeEventListener('mousemove', logMousePosition);
    };
  }, []);

  return (
    <div>
      <p>
        Hook X-{x} Y-{y}
      </p>
    </div>
  );
}

export default HookMouse;
