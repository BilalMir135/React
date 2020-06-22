import React, { useReducer, useEffect } from 'react';
import FetchingData from './FetchingData';
import axios from 'axios';

//fetching data with useReducer
const initialState = {
  post: {},
  loading: true,
  error: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { post: action.paylod, loading: false, error: '' };
    case 'FETCH_FAIL':
      return { post: {}, loading: false, error: 'Something went wrong!' };
    default:
      return state;
  }
};

function FetchingDataTwo() {
  const { state, dispatch } = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/2')
      .then((res) => {
        dispatch({ type: 'FETCH_SUCCESS', paylod: res.data });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_FAIL' });
      });
  }, []);

  return (
    <div>
      {state.loading ? 'Loading' : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default FetchingData;
