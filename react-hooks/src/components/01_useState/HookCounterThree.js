import React, { useState } from 'react';

//useState Hook with object
//useState doesnot merge obj itself we have to do it manually bu use (...) spread operator
function HookCounterThree() {
  const [name, setName] = useState({ fname: '', lname: '' });
  return (
    <div>
      <input
        type='text'
        value={name.fname}
        onChange={(e) => setName({ ...name, fname: e.target.value })}
      />
      <input
        type='text'
        value={name.lname}
        onChange={(e) => setName({ ...name, lname: e.target.value })}
      />
      <h2>First Name : {name.fname}</h2>
      <h2>Last Name : {name.lname}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
}

export default HookCounterThree;
