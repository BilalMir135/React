import React, { useState, useEffect } from 'react';

//useEffect after render
function HookEffect() {
  const [count, setCount] = useState(0);

  //this useEffect method will call after every render of HookEffect component
  useEffect(() => {
    document.title = `You clicked count ${count} times`;
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count-{count}</button>
    </div>
  );
}

export default HookEffect;
