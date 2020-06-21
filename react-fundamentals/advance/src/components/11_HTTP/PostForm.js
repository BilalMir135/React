import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: '',
      title: '',
      body: '',
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = (e) => {
    e.preventDefault();
    axios
      .post('https://jsonplaceholder.typicode.com/posts12', this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { userID, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input
            type='text'
            name='userID'
            value={userID}
            onChange={this.changeHandler}
          />
          <br />
          <input
            type='text'
            name='title'
            value={title}
            onChange={this.changeHandler}
          />
          <br />
          <input
            type='text'
            name='body'
            value={body}
            onChange={this.changeHandler}
          />
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
