import React, { useReducer } from 'react';

//use reducer complex state and action

//reducer
const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, firstCounter: state.firstCounter + action.value };
    case 'DECREMENT':
      return { ...state, firstCounter: state.firstCounter - action.value };
    case 'INCREMENT2':
      return { ...state, secondCounter: state.secondCounter + action.value };
    case 'DECREMENT2':
      return { ...state, secondCounter: state.secondCounter - action.value };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

function HookReducerTwo() {
  //using reducer
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>First Count-{count.firstCounter}</p>
      <p>Second Count-{count.secondCounter}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT', value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT', value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'INCREMENT', value: 5 })}>
        Increment-5
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT', value: 5 })}>
        Decrement-5
      </button>

      <div>
        <button onClick={() => dispatch({ type: 'INCREMENT2', value: 1 })}>
          Increment Counter 2
        </button>
        <button onClick={() => dispatch({ type: 'DECREMENT2', value: 1 })}>
          Decrement Counter 2
        </button>
      </div>

      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}

export default HookReducerTwo;
