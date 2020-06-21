import React from 'react';

//Using JSX
/* const Hello = () => {
  return (
    <div id='myID' className='dummyClass'>
      <h1>Hello From Bilal</h1>
      <h3>Software Engineer</h3>
    </div>
  );
}; */

//Without using JSX
const Hello = () => {
  return React.createElement(
    'div',
    { id: 'myID', className: 'dummyClass' },
    React.createElement('h1', null, 'Hello From Bilal'),
    React.createElement('h3', null, 'Software Engineer')
  );
};
export default Hello;
