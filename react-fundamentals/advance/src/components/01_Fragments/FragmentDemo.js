import React from 'react';

//React.Fragment
function FragmentDemo() {
  return (
    <React.Fragment>
      <h1>Hello World</h1>
      <p>How are you</p>
    </React.Fragment>
  );

  //we cannot use key attribute in this shorthand react fragment
  /*   return (
    <>
      <h1>Hello World</h1>
      <p>How are you</p>
    </>
  ); */
}

export default FragmentDemo;
