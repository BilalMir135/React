import React, { Component } from 'react';

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello!',
    };

    //this.clickHandler = this.clickHandler.bind(this);
  }

  /* clickHandler() {
    this.setState({
      message: 'GoodBye!',
    });
  } */

  clickHandler = () => {
    this.setState({
      message: 'GoodBye!',
    });
  };

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        {/* #01 Event Binding in render method */}
        {/*  <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* #02 Event Binding with arrow function */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        {/* #03 Event binding in constructor */}
        {/* <button onClick={this.clickHandler}>Click</button> */}
        {/* #04 Event Binding with class property */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
