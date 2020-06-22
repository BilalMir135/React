import React, { useState, useEffect } from 'react';
import axios from 'axios';

//fetching single data
function FetchDataTwo() {
  const [post, setPost] = useState({});
  const [id, setID] = useState(1);
  const [idFromBttonClick, setIdFromButtonClcik] = useState(1);

  const handleClick = () => {
    setIdFromButtonClcik(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromBttonClick}`)
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idFromBttonClick]);

  return (
    <div>
      <input type='text' value={id} onChange={(e) => setID(e.target.value)} />
      <button type='button' onClick={handleClick}>
        Fetch Post
      </button>
      <div>{post.title}</div>
    </div>
  );
}

export default FetchDataTwo;
