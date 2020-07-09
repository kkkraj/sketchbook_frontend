import React, { Component } from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import DrawPage from "./DrawPage";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Gallery from "./Gallery";
import User from "./User";
import Toggle from "./Toggle";

export default class App extends Component {
  state = {
    users: [],
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
        localStorage.setItem("token", data.jwt);
        localStorage.setItem("id", data.id);
      });
  };

  logOutUser = () => {
    localStorage.clear();
  };

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <h1>Sketch Pad</h1>
            <nav
              id="nav"
              className="navbar navbar-expand-lg navbar-light bg-light"
            >
              <ul className="navbar-nav mr-auto">
                <li>
                  <Link to={"/"} className="nav-link">
                    {" "}
                    Home{" "}
                  </Link>
                </li>
                <li>
                  <Link to={"/sketchpad"} className="nav-link">
                    Sketchpad
                  </Link>
                </li>
                <li>
                  <Link to={"/gallery"} className="nav-link">
                    Gallery
                  </Link>
                </li>
              </ul>
            </nav>
            <hr />

            <Switch>
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
              <Route exact path="/sketchpad" component={DrawPage} />
              <Route exact path="/gallery" component={Gallery} />
            </Switch>
            {/* <div style={{ display: "none" }}>
              <User addNewUser={this.addNewUser} />
            </div> */}
          </div>
        </Router>
      </div>

      // <div className="App">
      //   <NavBar />
      //   <h1>Sketch Pad</h1>
      //   <DrawPage />
      //   {/* <Footer /> */}
      //   <Gallery />
      // </div>
    );
  }
}
