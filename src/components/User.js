import React, { Component } from "react";
import Toggle from "./Toggle";
import Signup from "./Signup";
import Login from "./Login";
import Grid from "@material-ui/core/Grid";


export class User extends Component {
  render() {
    return (
      <div>
        <h1>User Page</h1>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="fixed"
        >
          <Toggle>
            {({ on, toggle }) => (
              <div>
                <button onClick={toggle}> Sign UP</button>
                {on && <Signup addNewUser={this.props.addNewUser} on={on} />}
              </div>
            )}
          </Toggle>

          <Toggle>
            {({ on, toggle }) => (
              <div>
                <button onClick={toggle}> Login</button>
                {on && <Login loginUser={this.props.loginUser} on={on} />}
              </div>
            )}
          </Toggle>
        </Grid>
      </div>
    );
  }
}

export default User;
