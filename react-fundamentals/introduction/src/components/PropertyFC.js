import React from 'react';

//Props in FC
const PropsFC = (props) => {
  //props.fname = 'xyz';   WRONG! props are immutable
  //const {fname, lname} = props;  destructuring props
  return (
    <div>
      <h1>Hello from {props.fname + ' ' + props.lname}</h1>
      {props.children}
    </div>
  );
};

export default PropsFC;
