import React, { Component } from 'react';
import PropsFC from './PropertyFC';

//Props in CC
class PropsCC extends Component {
  render() {
    return (
      <div>
        <h1>Hello from {this.props.fname + ' ' + this.props.lname}</h1>
        {this.props.children}
      </div>
    );
  }
}

export default PropsCC;
