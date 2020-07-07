import React, { Component } from "react";
import { CirclePicker } from "react-color";

export default class Toolbox extends Component {
  render() {
    return <CirclePicker onClick={this.props.handleClick} />;
  }
}
