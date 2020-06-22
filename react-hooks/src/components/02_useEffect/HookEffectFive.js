import React, { useState, useEffect } from 'react';

//useEffect with dependency
function HookEffectFive() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const intervel = setInterval(incrementCount, 1000);
    return () => {
      clearInterval(intervel);
    };
  }, [count]);

  return <div>{count}</div>;
}

export default HookEffectFive;
