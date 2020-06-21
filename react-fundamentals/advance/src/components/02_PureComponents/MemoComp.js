import React from 'react';

//To make pure component as a functional component we use React.memo
function MemoComp({ name }) {
  return <div>Memo Component</div>;
}

//this is higher order component
//it take component as a parameter and return new component with adding some features
export default React.memo(MemoComp);
