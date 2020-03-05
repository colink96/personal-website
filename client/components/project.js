import React from 'react'
import {Link} from 'react-router-dom'
import project from '../store/project'

export const Project = props => {
  return (
    <div className="project">
      <h2>{props.title}</h2>
      <a href={props.url}>
        <img className="project-icon" src={props.img} />
      </a>
      <div className="project-spacer" />
      <span>
        <a href={props.github}>
          <img id="gitcon" src="/gitcon.png" />
        </a>
      </span>
      <div className="project-spacer" />
      <hr />
      <p>{props.description}</p>
      <div className="project-spacer" />
      <p>Built using: {props.stack}</p>
    </div>
  )
}
