import React from 'react';

export default function CustomToast({ closeToast }) {
  return (
    <div>
      Custom Toast
      <button onClick={closeToast}>Close</button>
    </div>
  );
}
