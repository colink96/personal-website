import React from 'react'
import {connect} from 'react-redux'
import {getAllExperiences} from '../store/experience'
import {Experience} from './experience'

class DisconnectedExperience extends React.Component {
  componentDidMount() {
    this.props.getAllExperiences()
  }
  render() {
    return (
      <div id="experiences" className="panel" data-color="green">
        <h1>Experience</h1>
        {this.props.allExperiences &&
          this.props.allExperiences.map(experience => {
            return (
              <Experience
                key={experience.id}
                company={experience.company}
                date={experience.date}
                location={experience.location}
                title={experience.title}
                description={experience.description}
              />
            )
          })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    allExperiences: state.experience.allExperiences
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllExperiences: () => dispatch(getAllExperiences())
  }
}

export const Experiences = connect(mapStateToProps, mapDispatchToProps)(
  DisconnectedExperience
)
