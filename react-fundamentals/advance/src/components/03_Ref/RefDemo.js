import React, { Component } from 'react';

//Ref
class RefDemo extends Component {
  constructor(props) {
    super(props);

    //creating ref for input filed
    this.inputRef = React.createRef();

    //Method # 02 of using ref Call Back Ref
    this.cbRef = null;
    this.setcbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    //focus on the input filed after rendering the component
    /* this.inputRef.current.focus();
    console.log(this.inputRef); */

    //Method # 02 of using ref Call Back Ref
    if (this.cbRef) {
      this.cbRef.focus(); //in cbref we don't need current property
    }
  }

  clickHandler = () => {
    //taking input field data by ref
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} />
        <button onClick={this.clickHandler}>Click</button>
        <br />
        {/* Call Back Ref */}
        <input type='text' ref={this.setcbRef} />
      </div>
    );
  }
}

export default RefDemo;
