
import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: 'laura',
      input: 'this is an input'
    };
  }

  //when calling a funciton within a class and dealing with "this" keyword, it must be an arrow function. Not a normal function.
  Increment = () => {
    this.setState({
        count: this.state.count + 1
    })


    //this will work but it's not clean and not a good way.
    // this.state.count++;
    // this.forceUpdate();
  }

  onInputChanged = (e) => {
    this.setState({input: e.target.value})
}

  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.onInputChanged} />
        <button onClick={this.Increment}>+</button>
        <span>{this.state.count}</span>
        <div>{this.state.name}</div>
        <div>input value = {this.state.input}</div>
      </div>
    );
  }
}
