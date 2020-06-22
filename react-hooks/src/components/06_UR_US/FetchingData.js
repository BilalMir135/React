import React, { useState, useEffect } from 'react';
import axios from 'axios';

//fetching data with useState
function FetchingData() {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError('');
      })
      .catch((err) => {
        setLoading(false);
        setError('Something went wrong!');
        setPost({});
      });
  });

  return (
    <div>
      {loading ? 'Loading' : post.title}
      {error ? error : null}
    </div>
  );
}

export default FetchingData;
