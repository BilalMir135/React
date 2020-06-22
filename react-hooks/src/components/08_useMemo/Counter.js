import React, { useState, useMemo } from 'react';

//useMemo Hook
function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  //this will cause delay rendering both counterOne and counterTwo
  /*  const isEven = () => {
    let i = 0;
    while (i < 200000000) i++;
    return counterOne % 2 === 0;
  }; */

  //to avoid this we use memo hook
  //this will cause delay only for counter)ne to which it belongs not others
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <button onClick={() => setCounterOne(counterOne + 1)}>
        Count-{counterOne}
      </button>
      <p>{isEven ? 'Even' : 'Odd'}</p>
      <button onClick={() => setCounterTwo(counterTwo + 1)}>
        Count-{counterTwo}
      </button>
    </div>
  );
}

export default Counter;
