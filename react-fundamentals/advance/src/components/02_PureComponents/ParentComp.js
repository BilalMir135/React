import React, { Component } from 'react';
import PureComp from './PureComp';
import RegularComp from './RegularComp';
import MemoComp from './MemoComp';

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Bilal',
    };
  }

  //Now regularComp will re-render on every 2 sec when parentComp but pureComp will not
  //because it doing change os same object so on SC prev and current state ref will be same and pureComp will note re-render
  componentDidMount() {
    setInterval(() => {
      this.setState({
        //name: 'Bilal',
        name: 'Anas',
      });
    }, 2000);
  }

  render() {
    console.log('******************Parent Component*******************');
    return (
      <div>
        <p>Parent Component</p>
        {/*  <PureComp name={this.state.name} />
        <RegularComp name={this.state.name} /> */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
