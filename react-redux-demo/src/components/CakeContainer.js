import React from 'react';
import { buyCake } from '../redux';
import { connect } from 'react-redux';

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Cake Num - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

//replaced by useSelector Hook
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

//replaced by useDispatch Hook
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
