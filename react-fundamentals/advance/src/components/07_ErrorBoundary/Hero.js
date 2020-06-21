import React from 'react';

//Error Boundary
function Hero({ heroname }) {
  if (heroname === 'Joker') {
    throw new Error('Not a hero');
  } else {
    return <div>{heroname}</div>;
  }
}

export default Hero;
