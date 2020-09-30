import React from 'react';
import { buyIceCream } from '../redux';
import { connect } from 'react-redux';

const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>Ice Cream Num - {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  );
};

//replaced by useSelector Hook
const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

//replaced by useDispatch Hook
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
