import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      comment: '',
      topic: 'React',
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(
      `Username : ${this.state.username}\nComment : ${this.state.comment}\nTopic : ${this.state.topic}`
    );
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input
            type='text'
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
          <br />

          <label>Comment: </label>
          <textarea
            value={this.state.comment}
            onChange={this.handleCommentChange}
          ></textarea>
          <br />

          <label>Topic: </label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value='React'>React</option>
            <option value='Angular'>Angular</option>
            <option value='Vue'>Vue</option>
          </select>
          <br />

          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
