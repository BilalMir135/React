import React from 'react';
import ReactDOM from 'react-dom';

//Poratl example we will render it outside root div to our create portal-root div
//although it is a child component of App but will render outside App div
//but PortalDemo is also react child so we can perform events from root div to portal div elements
function PortalDemo() {
  return ReactDOM.createPortal(
    <div>
      <h1>Portal Demo</h1>
    </div>,
    document.getElementById('portal-root')
  );
}

export default PortalDemo;
