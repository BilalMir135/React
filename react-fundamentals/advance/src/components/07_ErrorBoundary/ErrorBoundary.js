import React, { Component } from 'react';

//Creating ErrorBoundary
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  //use to catch error
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  //mostly used to log error
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      //fall back UI
      return <h1>Something went wrong</h1>;
    } else {
      //Children of Error Boundary tag
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
