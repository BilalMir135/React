import React from 'react';
import { shoes } from '../shoesData';
import { Link } from 'react-router-dom';

const LaunchIndex = () => {
  return Object.entries(shoes).map(([key, { name, img }]) => (
    <li key={key}>
      <Link to={`/launch/${key}`}>
        <h2>{name}</h2>
        <img src={img} alt={name} />
      </Link>
    </li>
  ));
};

export default LaunchIndex;
