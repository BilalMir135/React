import React, { useState, useEffect } from 'react';

const Repos = ({ match }) => {
  const [repoData, setRepoData] = useState({
    name: '',
    full_name: '',
    description: '',
  });

  useEffect(() => {
    const fecthItem = async () => {
      const response = await fetch(
        'https://api.github.com/users/bilalmir135/repos'
      );
      const data = await response.json();
      console.log(data);
      setRepoData({ ...data[match.params.id] });
    };
    fecthItem();
  }, []);

  return (
    <div>
      <h1>Name: {repoData.name}</h1>
      <h3>Full Name: {repoData.full_name}</h3>
      <p>Description: {repoData.description}</p>
    </div>
  );
};

export default Repos;
