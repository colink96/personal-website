import React from 'react'
import {connect} from 'react-redux'
import {getAllProjects} from '../store/project'
import {Project} from './project'

class DisconnectedProjects extends React.Component {
  componentDidMount() {
    this.props.getAllProjects()
  }

  render() {
    return (
      <div>
        <h1>Projects</h1>
        {this.props.allProjects &&
          this.props.allProjects.map(project => {
            return (
              <Project
                key={project.id}
                title={project.title}
                description={project.description}
                stack={project.stack}
                url={project.url}
                github={project.github}
              />
            )
          })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    allProjects: state.project.allProjects
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllProjects: () => dispatch(getAllProjects())
  }
}

export const Projects = connect(mapStateToProps, mapDispatchToProps)(
  DisconnectedProjects
)
