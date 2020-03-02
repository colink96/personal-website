import React from 'react'
import {Navbar, AboutMe, Projects, Experiences} from './index'

export class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <div id="home-spacing" />
        <img
          id="heroimg"
          src="/JGonz_6063.jpg"
          className="panel"
          data-color="maxblue"
        />
        <h1>COLIN KIM</h1>
        <h3>FULLSTACK WEB DEVELOPER / SOFTWARE ENGINEER</h3>
        <hr />
        <Navbar />
        <div id="spacing" />
        <Projects />
        <Experiences />
        <AboutMe />
      </div>
    )
  }
}
