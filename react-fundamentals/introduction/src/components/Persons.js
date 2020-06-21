import React from 'react';

//List rendering
function Persons({ person }) {
  return (
    <div>
      <h2>
        I am {person.name}. I am {person.age} years old. I Know {person.skill}{' '}
      </h2>
    </div>
  );
}

export default Persons;
