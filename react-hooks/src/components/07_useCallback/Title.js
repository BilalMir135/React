import React from 'react';

function Title() {
  console.log('Render Title');
  return (
    <div>
      <h1>useCallback Hook</h1>
    </div>
  );
}

export default React.memo(Title);
//to prevent unnecessary
