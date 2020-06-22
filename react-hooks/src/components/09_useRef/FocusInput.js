import React, { useRef, useEffect } from 'react';

//useRef Hook
function FocusInput() {
  const inputRef = useRef(null);

  //focus input on initial page load
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type='text' ref={inputRef} />
    </div>
  );
}

export default FocusInput;
