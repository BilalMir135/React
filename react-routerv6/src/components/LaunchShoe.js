import React from 'react';
import { shoes } from '../shoesData';
import { useParams } from 'react-router-dom';

const LaunchShoe = () => {
  const { key } = useParams();
  const shoe = shoes[key];
  if (!shoe) {
    return <h1>Not Found</h1>;
  }

  const { name, img } = shoe;

  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} />
    </div>
  );
};

export default LaunchShoe;
