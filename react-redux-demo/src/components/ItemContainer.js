import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

const ItemContainer = (props) => {
  return (
    <div>
      <h2>Items - {props.items}</h2>
      <button onClick={props.buyItem}>Buy Item</button>
    </div>
  );
};

//getting data from store conditionally
const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams;
  return {
    items: itemState,
  };
};

//changing data in store conditionally
const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
