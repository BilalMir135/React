import React, { Component } from 'react';
import axios from 'axios';

//HTTP Get Request
class PostRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: '',
    };
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts12')
      .then((response) => {
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: 'Error in retreiving data' });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        <h1>Post List</h1>
        {posts.length
          ? posts.map((post) => <p key={post.id}>{post.title}</p>)
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default PostRequest;
