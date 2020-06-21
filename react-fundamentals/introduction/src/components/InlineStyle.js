import React from 'react';

//inline styling
const heading = {
  fontSize: '30px',
  color: 'blue',
};
function InlineStyle() {
  return (
    <div>
      <h2 style={heading}>Inline Styling</h2>
      <h2 className='error'>Child Error</h2>
      {/*  <h2 className={styles.success}>Child Success</h2>  generates error*/}
    </div>
  );
}

export default InlineStyle;
