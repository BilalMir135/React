import React, { Component } from 'react';

//Updating Phase B => Child Component
class UpdatingLifecycleB extends Component {
  //Invoke # 01
  constructor(props) {
    super(props);
    this.state = {
      name: 'Bilal',
    };
    console.log('LifecycleB constructor');
  }

  //After Updated Invoke # 01
  //rarely used lifecycle method
  //use to change state py the props that are passed
  //returns null or the updated state object
  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB getDerivedStateFromProps');
    return null;
  }

  //After Updated Invoke # 02
  //rarely used Lifecycle method
  //use to dictates if the component should re-render or not
  //take nextProps, nextStates as parameter compare it with prev and return true for updated and false for not
  shouldComponentUpdate() {
    console.log('LifecycleB shouldComponentUpdate');
    return true;
  }

  //After Updated Invoke # 04
  //rarely used Lifecycle method
  //called right before the chnages of virtual DOM are to be reflected in the actual DOM
  //used to get information of DOM
  //return null or value that will pass as parameter to next method
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleB getSnapshotBeforeUpdate');
    return null;
  }

  //After Updated Invoke # 05
  //called once after the render is finished in the re=render cycles
  //can cause side effects like ajax calls
  //take three parameters prevProps, prevState, snapShot
  componentDidUpdate() {
    console.log('LifecycleB componentDidUpdate');
  }

  //After Updated Invoke # 03
  render() {
    console.log('LifecycleB render');
    return (
      <div>
        <div>LifecycleB</div>
      </div>
    );
  }
}

export default UpdatingLifecycleB;
