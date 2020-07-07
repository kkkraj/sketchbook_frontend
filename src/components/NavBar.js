import React, {Component} from 'react'

export default class NavBar extends Component {
    render() {
        return(
            <div>
              <ul id="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">Draw</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Profile</a></li>
              </ul>
            </div>    
        )
    }
}