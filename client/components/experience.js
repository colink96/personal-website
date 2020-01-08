import React from 'react'
import {Link} from 'react-router-dom'

export const Experience = props => {
  return (
    <div className="experience">
      <h2>{props.company}</h2>
      <h3>{props.title}</h3>
      <h3>{props.location}</h3>
      <h4>{props.date}</h4>
      <p>{props.description}</p>
    </div>
  )
}
