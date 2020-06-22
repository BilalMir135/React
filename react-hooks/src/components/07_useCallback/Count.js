import React from 'react';

function Count({ text, value }) {
  console.log('Render Count');
  return (
    <div>
      {text}-{value}
    </div>
  );
}

export default React.memo(Count);
//to prevent unnecessary
