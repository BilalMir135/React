import React, { useState, useEffect } from 'react';

//conditionally run effect
function HookEffectTwo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  //when we write something in input text the useEffect will run or every single char
  /* useEffect(() => {
    console.log('useEffect after component update');
    document.title = `You clicked count ${count} times`;
  }); */

  //to avoid that
  //in second arrgument we pass an array which contains all the states on which we want to run useEffect on change
  useEffect(() => {
    console.log('useEffect after component update');
    document.title = `You clicked count ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Count-{count}</button>
    </div>
  );
}

export default HookEffectTwo;
