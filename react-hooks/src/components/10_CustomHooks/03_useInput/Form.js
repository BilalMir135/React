import React from 'react';
import useInput from '../../../hooks/useInput';

function Form() {
  const [firstName, bindFirstName, resetFirstName] = useInput('');
  const [lastName, bindLastName, resetLastName] = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>FirstName</label>
        <input type='text' {...bindFirstName} />
        <br />
        <label>LastName</label>
        <input type='text' {...bindLastName} />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Form;
