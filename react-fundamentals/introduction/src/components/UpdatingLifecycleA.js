import React, { Component } from 'react';
import UpdatingLifecycleB from './UpdatingLifecycleB';

//Updating Phase A => Parent Component
class UpdatingLifecycleA extends Component {
  //Invoke # 01
  constructor(props) {
    super(props);
    this.state = {
      name: 'Bilal',
    };
    console.log('LifecycleA constructor');
  }

  changeState = () => {
    this.setState({
      name: 'Bilal Mir',
    });
  };

  //After Updated Invoke # 01
  //rarely used lifecycle method
  //use to change state py the props that are passed
  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps');
    return null;
  }

  //After Updated Invoke # 02
  //rarely used Lifecycle method
  //use to dictates if the component should re-render or not
  //take nextProps, nextStates as parameter compare it with prev and return true for updated and false for not
  shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate');
    return true;
  }

  //After Updated Invoke # 04
  //rarely used Lifecycle method
  //called right before the chnages of virtual DOM are to be reflected in the actual DOM
  //used to get information of DOM
  //return null or value that will pass as parameter to next method
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleA getSnapshotBeforeUpdate');
    return null;
  }

  //After Updated Invoke # 05
  //called once after the render is finished in the re=render cycles
  //can cause side effects like ajax calls
  //take three parameters prevProps, prevState, snapShot
  componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate');
  }

  //After Updated Invoke # 03
  render() {
    console.log('LifecycleA render');
    return (
      <div>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <UpdatingLifecycleB />
      </div>
    );
  }
}

export default UpdatingLifecycleA;
