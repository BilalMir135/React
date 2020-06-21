import React from 'react';

//HOC => Higher Order Component
//HOC is function which takes originial component as a parameter, add some functionality
//and return it as a enhanced component
//we use HOC when we want to add same functionality in more than one components and the are distributed in DOM
//and we cannot arrange them directly under one parent

//adding incremnetCount in components
//we can pass more parameters in HOC in this we passing a number which to be increment
const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          /* passing all the remaining props of original componet */
          {...this.props}
        />
      );
    }
  }

  return WithCounter;
};

export default withCounter;
