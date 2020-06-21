import React from 'react';

//functional component
/* function Greet() {
  return <h1>Hello Bilal</h1>;
}

export default Greet; */

//ES6 fc
/* const greet = () => <h1>Hello Bilal (ES6)</h1>;
export default greet; */
// this fc can be imported with any name

//named export
export const GreetN = () => <h1>Hello Bilal (Name Export)</h1>;
