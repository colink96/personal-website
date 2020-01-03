import React from 'react'

export const SingleProject = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.img} />
      <p>{props.description}</p>
    </div>
  )
}
