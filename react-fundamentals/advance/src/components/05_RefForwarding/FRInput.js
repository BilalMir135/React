import React from 'react';

//Forwarding Ref from parent to child component
const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type='text' ref={ref} />
    </div>
  );
});

export default FRInput;
