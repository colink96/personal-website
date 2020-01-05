import React from 'react'
import {Link} from 'react-router-dom'

export const Project = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <a href={props.url}>View Project</a> | <a href={props.github}>Github</a>
      <p>{props.description}</p>
      <p>Built using: {props.stack}</p>
    </div>
  )
}
