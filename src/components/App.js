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
              <Route exact path="/" component={User} />
              <Route exact path="/sketchpad" component={DrawPage} />
              <Route exact path="/gallery" component={Gallery} />
            </Switch>
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
