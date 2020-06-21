import React from 'react';

function FunctionClick() {
  function clickHandler() {
    console.log('Button Clicked');
  }
  //clicker handler takes function not function call
  //return <button onClick={clickHandler()}>Click</button>; Wrong! it will not work
  return <button onClick={clickHandler}>Click</button>;
}

export default FunctionClick;
