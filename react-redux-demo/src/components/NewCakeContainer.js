import React, { useState } from 'react';
import { buyCake } from '../redux';
import { connect } from 'react-redux';

const NewCakeContainer = (props) => {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <h2>New Cake Num - {props.numOfCakes}</h2>
      <input type='number' value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => props.buyCake(number)}>Buy Cake</button>
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
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
