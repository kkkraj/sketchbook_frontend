import React, { Component } from "react";

class Logout extends Component {
  render() {
    return <button onClick={this.props.logOutUser}>Logout</button>;
  }
}

export default Logout;
