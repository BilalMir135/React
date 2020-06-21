import React, { Component } from 'react';

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

export default HoverCount;
