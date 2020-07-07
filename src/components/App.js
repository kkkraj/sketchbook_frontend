import React, {Component} from 'react';
import '../App.css';

import DrawPage from './DrawPage'
import NavBar from './NavBar'
import Footer from './Footer'

export default class App extends Component {
  render() {
    return (
      <div className="App" >
        <NavBar />
        <h1>Sketch Pad</h1>
        <DrawPage />
        {/* <Footer /> */}
      </div>
    );
  }
}

