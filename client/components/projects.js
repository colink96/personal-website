import React from 'react'
import {connect} from 'react-redux'
import {getAllProjects, getOneProject} from '../store/project'
import {Project} from './project'

class DisconnectedProjects extends React.Component {
  componentDidMount() {
    this.props.getAllProjects()
  }

  render() {
    return (
      <div id="projects" className="panel" data-color="lavender">
        <h1>PROJECTS</h1>
        <div id="projects-container">
          {this.props.allProjects &&
            this.props.allProjects.map(project => {
              return (
                <Project
                  key={project.id}
                  img={project.img}
                  title={project.title}
                  description={project.description}
                  stack={project.stack}
                  url={project.url}
                  github={project.github}
                />
              )
            })}
          <div id="project-viewer" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    allProjects: state.project.allProjects,
    singleProject: state.project.singleProject
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllProjects: () => dispatch(getAllProjects()),
    getOneProject: id => dispatch(getOneProject(id))
  }
}

export const Projects = connect(mapStateToProps, mapDispatchToProps)(
  DisconnectedProjects
)
