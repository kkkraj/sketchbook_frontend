import React, { Component } from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import DrawPage from "./DrawPage";
import Gallery from "./Gallery";
import User from "./User";

export default class App extends Component {
  state = {
    drawings: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/sketchbooks")
      .then((resp) => resp.json())
      .then((drawings) => this.setState({
        drawings: drawings
      }))
  }

  handleDeleteClick = (drawing) => {
    fetch(`http://localhost:3000/sketchbooks/${drawing.id}` , {method: "DELETE"})

    const artworks = this.state.drawings.filter((artwork) => (artwork.id !== drawing.id))

    this.setState({ drawings: artworks })
  }
  
  render() {
    return (
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
            <Route exact path="/gallery" render = {() => {
              return <Gallery artworkData={this.state.drawings} handleDeleteClick={this.handleDeleteClick}/>
            }} />
          </Switch>
        </div>
      </Router>
    );
  }
}
