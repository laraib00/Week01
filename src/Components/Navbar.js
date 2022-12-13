import React, { Component } from 'react'
export default class Navbar extends Component {
  render() {
    return (
      <>
       <header>
        <div id="lf"><h1>Laraib Fatima</h1></div>
        <div id="navbar">
            <ul>
                <li><a href="#contact">Contact us</a></li>
                <li><a href="#clients">My Clients</a></li>
                <li><a href="#projects">My Projects </a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#home">Home</a></li>
            </ul>
        </div>
    </header>
    
       </>
    )
  }
}
