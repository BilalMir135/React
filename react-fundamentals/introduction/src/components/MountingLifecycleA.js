import React, { Component } from 'react';
import MountingLifecycleB from './MountingLifecycleB';

//Mounting Phase A => Parent Component
class MountingLifecycleA extends Component {
  //Invoke # 01
  constructor(props) {
    super(props);
    this.state = {
      name: 'Bilal',
    };
    console.log('LifecycleA constructor');
  }

  //Invoke # 02
  //rarely used lifecycle method
  //use to change state py the props that are passed
  //returns null or the updated state object
  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps');
    return null;
  }

  //Invoke # 04
  //calls after a component and it's childrencomponents have been rendered to the DOM
  //used to do side effects like ajax calls to load data
  componentDidMount() {
    console.log('LifecycleA componentDidMount');
  }

  //Invoke # 03
  render() {
    console.log('LifecycleA render');
    return (
      <div>
        <div>LifecycleA</div>
        <MountingLifecycleB />
      </div>
    );
  }
}

export default MountingLifecycleA;
