import React, { useState } from 'react';

//useState Hook with previous state
//when to chnage state depending on previous state this is the safe & correct method
function HookCounterTwo() {
  const [count, setCount] = useState(0);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      <p>Count-{count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>{' '}
      <br />
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>{' '}
      <br />
      <button onClick={incrementFive}>Increment Five</button> <br />
    </div>
  );
}

export default HookCounterTwo;
