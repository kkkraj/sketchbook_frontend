import React, { Component } from "react";

class Signup extends Component {
  state = {
    username: "",
    password: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addNewUser(this.state);
    this.setState({
      username: "",
      password: "",
    });
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <br/>
          <p className="signuplogin">Sign Up</p>
          <div className="field">
            <label>Name: </label>
            <input
              value={this.state.username}
              onChange={this.handleInputChange}
              name="username"
            />
            <br></br>
            <label>Password: </label>
            <input
              value={this.state.password}
              onChange={this.handleInputChange}
              type="password"
              name="password"
            />
          </div>
          <br></br>
          <input className="submit" type="submit" />
        </form>
      </div>
    );
  }
}

export default Signup;
