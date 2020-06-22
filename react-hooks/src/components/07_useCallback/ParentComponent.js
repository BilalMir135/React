import React, { useState, useCallback } from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

function ParentComponent() {
  const [age, setAge] = useState(10);
  const [salary, setSalary] = useState(5000);

  //on every click the function is creating which change Button props so to stop unnecessary re-rendering we
  //use calback hook
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text='Age' value={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text='Salary' value={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default ParentComponent;
