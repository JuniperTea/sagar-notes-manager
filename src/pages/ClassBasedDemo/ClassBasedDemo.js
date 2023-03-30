import React, { Component } from "react";
import Capitalize from "../../Capitalize";
import Profile from "../../Profile";
import Counter from "./Counter";

export default class ClassBasedDemo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Profile name="Laura" />
        <Capitalize label="laura" />
        <Capitalize label="lowercase" label2="second component" />
        <hr />
        <Counter />
      </div>
    );
  }
}
