import React, { Component } from 'react';

//Mounting Phase B => Child Component
class MountingLifecycleB extends Component {
  //Invoke # 01
  constructor(props) {
    super(props);
    this.state = {
      name: 'Bilal',
    };
    console.log('LifecycleB constructor');
  }

  //Invoke # 02
  //rarely used lifecycle method
  //use to change state py the props that are passed
  //returns null or the updated state object
  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB getDerivedStateFromProps');
    return null;
  }

  //Invoke # 04
  //calls after a component and it's childrencomponents have been rendered to the DOM
  //used to do side effects like ajax calls to load data
  componentDidMount() {
    console.log('LifecycleB componentDidMount');
  }

  //Invoke # 03
  render() {
    console.log('LifecycleB render');
    return <div>LifecycleB</div>;
  }
}

export default MountingLifecycleB;
