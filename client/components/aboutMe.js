import React from 'react'

export class AboutMe extends React.Component {
  render() {
    return (
      <div id="about" data-color="yankeeblue" className="panel">
        <h1>ABOUT ME</h1>
        <div id="about-blurb">
          <img id="profileimg" src="/JGonz_6079.jpg" />
          <div id="about-desc">
            <p>
              My name is Colin Kim and I am a full-stack web developer and
              software engineer based in New York City.
            </p>
            <p>
              I graduated from NYU Stern in May 2019 with a B.A. in Business,
              with concentrations in both Data Science and Finance.
            </p>
            <p>
              Throughout college, I realized that I enjoyed coding through my
              data science classes, but felt that data science didn't fully
              satisfy my desire to work with new technologies. Thus, shortly
              after graduating from NYU, I enrolled in Fullstack Academy's
              Software Engineering Immersive Bootcamp where I was able develop
              the skills I needed to pursue a new career in tech.
            </p>
            <p>
              I am now open to any freelance or full-time opportunities so that
              I can further grow my skillset and proficiency with code. I enjoy
              working on projects that are fun and make lives easier. Please
              feel free to reach out with any and all inquiries.
            </p>
          </div>
        </div>
        <div id="about-stack">
          <p>Here are some of the technologies I have been working with:</p>
          <div id="stack-container">
            <div className="stack">
              <img className="stack-icon" src="/js.png" />
              <span className="stack-desc">Javascript (ES6+)</span>
            </div>
            <div className="stack">
              <img className="stack-icon" src="/node.png" />
              <span className="stack-desc">Node.js</span>
            </div>
            <div className="stack">
              <img className="stack-icon" src="/express.png" />
              <span className="stack-desc">Express</span>
            </div>
            <div className="stack">
              <img className="stack-icon" src="/react.png" />
              <span className="stack-desc">React/React Native</span>
            </div>
            <div className="stack">
              <img className="stack-icon" src="/redux.png" />
              <span className="stack-desc">Redux</span>
            </div>
            <div className="stack">
              <img className="stack-icon" src="/viro.png" />
              <span className="stack-desc">ViroReact</span>
            </div>
            <div className="stack">
              <img className="stack-icon" src="/python.png" />
              <span className="stack-desc">Python</span>
            </div>
            <div className="stack">
              <img className="stack-icon" src="/postgres.png" />
              <span className="stack-desc">PostgreSQL</span>
            </div>
            <div className="stack">
              <img className="stack-icon" src="/sequelize.png" />
              <span className="stack-desc">Sequelize</span>
            </div>
            <div className="stack">
              <img className="stack-icon" src="/html.png" />
              <span className="stack-desc">HTML</span>
            </div>
            <div className="stack">
              <img className="stack-icon" src="/css.png" />
              <span className="stack-desc">CSS</span>
            </div>
            <div className="stack">
              <img className="stack-icon" src="/git.png" />
              <span className="stack-desc">Git</span>
            </div>
            <div className="stack">
              <img className="stack-icon" src="/socketio.svg" />
              <span className="stack-desc">Socket.io</span>
            </div>
          </div>
        </div>
        <div id="contact">
          <h1>CONTACT ME</h1>
          <a href="https://github.com/colink96">
            <img src="gitcon.png" />
          </a>
          <a href="mailto:colinmkim@gmail.com">
            <img src="email.png" />
          </a>
        </div>
      </div>
    )
  }
}
