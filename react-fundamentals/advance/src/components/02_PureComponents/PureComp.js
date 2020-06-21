import React, { PureComponent } from 'react';

//Pure Comp implement shouldComponentUpdate with a shallow props and state comparision
//Regular Comp doesnot use shouldComponentUpdate . It always return true by default

//Shallow Comparision
//For Primitive Types: check A and B have same value and are of same type. eg: string 'bilal' SC string 'bilal return true;
//For Complex Types: A SC B returns true if A nad B reference to same object. eg A=[1,2,3] A=B A SC B => true

//PureComponent do prevProp SC currrentProp OR prevState SC currentState (if difference) re-render component

//Tip: In pure component never mutate state always return new object that reflects the new state
class PureComp extends PureComponent {
  render() {
    console.log('Pure Component');
    return <div>PureComponent {this.props.name}</div>;
  }
}

export default PureComp;
