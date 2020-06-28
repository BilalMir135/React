import React from 'react';
import CoffeCard from './CoffeCard';
import { Grid } from '@material-ui/core';
import CoffeList from './constant';

const getCoffeCard = (coffeDataObj) => {
  return (
    <Grid item xs={12} sm={4}>
      <CoffeCard {...coffeDataObj} />
    </Grid>
  );
};

const Content = () => {
  return (
    <Grid container spacing={4}>
      {CoffeList.map((coffeDataObj) => getCoffeCard(coffeDataObj))}
    </Grid>
  );
};

export default Content;
