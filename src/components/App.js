import React, { Component } from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import DrawPage from "./DrawPage";
import Gallery from "./Gallery";
import User from "./User";
import Logout from "./Logout";

  export default class App extends Component {
  state = {
    drawings: [],
    auth: { currentUser: {} },
  };

  addNewUser = (newuser) => {
    console.log(newuser);
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: newuser }),
    });
    this.setState({ users: [newuser, ...this.state.users] });
  };

  loginUser = (userinfo) => {
    fetch("http://localhost:3000/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: userinfo }),
    })
      .then((res) => res.json())
      .then((data) => {
        const currentUser = { currentUser: data };

        this.setState({ auth: currentUser });
        console.log(data.user.id);
        localStorage.setItem("token", data.jwt);
        localStorage.setItem("id", data.user.id);
      });
  };

  logOutUser = () => {
    localStorage.clear();
    this.setState({ auth: { currentUser: {} } });
  };

  componentDidMount() {
    fetch("http://localhost:3000/sketchbooks", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((resp) => resp.json())
      .then((drawings) =>
        this.setState({
          drawings: drawings,
        })
      );
  }

  handleDeleteClick = (drawing) => {
    fetch(`http://localhost:3000/sketchbooks/${drawing.id}`, {
      method: "DELETE",
    });

    const artworks = this.state.drawings.filter(
      (artwork) => artwork.id !== drawing.id
    );

    this.setState({ drawings: artworks });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            {/* <h1>Sketch Pad</h1> */}
            <nav
              id="nav"
              className="navbar navbar-expand-lg navbar-light bg-light"
            >
              <ul className="navbar-nav mr-auto">
                <li>
                  <Link to={"/"} className="nav-item">
                    {" "}
                    Login{" "}
                  </Link>
                </li>
                <li>
                  <Link to={"/sketchpad"} className="nav-item">
                    Sketchpad
                  </Link>
                </li>
                <li>
                  <Link to={"/gallery"} className="nav-item">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to={"/logout"} className="nav-item">
                    Logout
                  </Link>
                </li>
                <li id="logo">
                  Live Canvas
                </li>
              </ul>
            </nav>
            {/* <hr /> */}

            <Switch>
              <Route exact path="/logout" component={Logout} />

              <Route
                exact
                path="/"
                render={() => {
                  return (
                    <User
                      loginUser={this.loginUser}
                      addNewUser={this.addNewUser}
                    />
                  );
                }}
              />
              {/* <Route
                path="/"
                render={() => {
                  const loggedIn = !this.state.auth.currentUser.id;

                  return loggedIn ? (
                    <Logout logOutUser={this.logOutUser} />
                  ) : (
                    <User
                      loginUser={this.loginUser}
                      addNewUser={this.addNewUser}
                    />
                  );
                }}
              /> */}
              <Route exact path="/sketchpad" component={DrawPage} />
              <Route
                exact
                path="/gallery"
                render={() => {
                  return (
                    <Gallery
                      artworkData={this.state.drawings}
                      handleDeleteClick={this.handleDeleteClick}
                    />
                  );
                }}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
