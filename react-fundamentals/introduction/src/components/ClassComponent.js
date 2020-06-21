import React from 'react';

//props as methods
function ClassComponent(props) {
  return (
    <div>
      {/* <button onClick={props.greetHandler}>Click</button> */}
      {/*  Passing parameters */}
      <button onClick={() => props.greetHandler('child')}>Click</button>
    </div>
  );
}

export default ClassComponent;
