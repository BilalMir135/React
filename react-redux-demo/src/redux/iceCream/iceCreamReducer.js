import { BUY_ICE_CREAM } from './iceCreamTypes';

const initialSate = {
  numOfIceCreams: 20,
};

const iceCreamReducer = (state = initialSate, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
