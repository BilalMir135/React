import React from 'react';
import Persons from './Persons';

//List rendering
function NameList() {
  //01
  /* const names = ['Anas', 'Bilal', 'Khizram'];
  return (
    <div>
      {names.map((name) => (
        <h2>I am {name}</h2>
      ))}
    </div>
  ); */

  //02
  /* const names = ['Anas', 'Bilal', 'Khizram'];
  const namesTag = names.map((name) => <h2>I am {name}</h2>);
  return <div>{namesTag}</div>; */

  //03
  /* const personsData = [
    {
      id: 1,
      name: 'Anas Bin Sohail',
      age: 20,
      skill: 'Angular JS',
    },
    {
      id: 2,
      name: 'Bilal Mir',
      age: 21,
      skill: 'React JS',
    },
    {
      id: 3,
      name: 'Khizram Khan',
      age: 20,
      skill: 'Vue JS',
    },
  ];

  const personsTag = personsData.map((person) => (
    <h2>
      I am {person.name}. I am {person.age} years old. I Know {person.skill}{' '}
    </h2>
  ));

  return <div>{personsTag}</div>; */

  //04
  /* const personsData = [
    {
      id: 1,
      name: 'Anas Bin Sohail',
      age: 20,
      skill: 'Angular JS',
    },
    {
      id: 2,
      name: 'Bilal Mir',
      age: 21,
      skill: 'React JS',
    },
    {
      id: 3,
      name: 'Khizram Khan',
      age: 20,
      skill: 'Vue JS',
    },
  ];
  const personTags = personsData.map((person) => (
    <Persons key={person.id} person={person} />
  ));
  return <div>{personTags}</div>; */

  //05 can use index as a key
  const names = ['Anas', 'Bilal', 'Khizram'];
  const namesTags = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));
  return <div>{namesTags}</div>;
}

export default NameList;
