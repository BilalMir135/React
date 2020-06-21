import React, { Component } from 'react';
import ComponentF from './ComponentF';
import UserContext from './userContext';

//using context value by ContextType

//contextType have 2 limitations
//01 only available for class component
//02 can be used once , if there are more than one context we connot use both with contextType
class ComponentE extends Component {
  //static contextType = UserContext; if no issue with public class
  render() {
    return (
      <div>
        Hello From Component E {this.context}
        <ComponentF />
      </div>
    );
  }
}

ComponentE.contextType = UserContext;

export default ComponentE;
