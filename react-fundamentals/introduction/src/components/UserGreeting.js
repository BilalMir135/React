import React, { Component } from 'react';

//Conditional Rendering
class UserGreeting extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    //#01
    /* if (this.state.isLoggedIn) {
      return <div>Welcome Bilal</div>;
    } else {
      return <div>Welcome Guest</div>;
    } */

    //02
    /*  let message;
    if (this.state.isLoggedIn) {
      message = <div>Welcome Bilal</div>;
    } else {
      message = <div>Welcome Guest</div>;
    }
    return message; */

    //03
    /* return this.state.isLoggedIn ? (
      <div>Welcome Bilal</div>
    ) : (
      <div>Welcome Guest</div>
    ); */

    //04
    return this.state.isLoggedIn && <div>Welcome Bilal</div>;
  }
}

export default UserGreeting;
