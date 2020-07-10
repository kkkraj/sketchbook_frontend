import React, { Component } from "react";

class Logout extends Component {
  render() {
    return (
      <div className="body">
        <button onClick={this.props.logOutUser}>Logout</button>
      </div>
    )
  }
}

export default Logout;
