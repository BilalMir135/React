import React, { useState, useEffect, useRef } from 'react';

function HookTimer() {
  const [count, setCount] = useState(0);
  //we use ref hook to store the ref of timer
  const timerRef = useRef();

  /* useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []); */

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div>
      Count-{count}
      {/*  This will generate error because timer is not available out of useEffect function */}
      {/* <button onClick={() => clearInterval(timer)}>Stop Timer</button> */}
      <button onClick={() => clearInterval(timerRef.current)}>
        Stop Timer
      </button>
    </div>
  );
}

export default HookTimer;
