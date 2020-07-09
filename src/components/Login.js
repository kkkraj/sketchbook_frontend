import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.loginUser(this.state);
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
          <h1>Login</h1>
          <br></br>
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
          <br></br>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Login;
