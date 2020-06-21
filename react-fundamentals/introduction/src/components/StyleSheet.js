import React from 'react';
import './myStyle.css';

//Style Sheet Styling

function StyleSheet(props) {
  const className = props.primary ? 'primary' : '';
  return (
    <div>
      <h2 className={`font-xl ${className}`}>StyleSheet</h2>
    </div>
  );
}

export default StyleSheet;
