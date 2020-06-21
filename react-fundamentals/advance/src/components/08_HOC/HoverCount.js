import React, { Component } from 'react';
import withCounter from './withCounter';

class HoverCount extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h1 onMouseOver={incrementCount}>Hoover {count} Times</h1>
      </div>
    );
  }
}

//adding counter functionality in it by use HOC
export default withCounter(HoverCount, 2);
