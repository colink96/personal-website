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
        <h1>RESUME</h1>
        <div id="resume">
          <div id="resume-container">
            <img id="resume-img" src="/ColinKim_Resume2020.png" />
          </div>
          <div id="dl">
            <a href="/ColinKim_Resume2020.pdf" download>
              {/* <img src="/save.png" id="save" /> */}
              <button id="dl-button" type="button">
                D O W N L O A D
              </button>
            </a>
          </div>
        </div>
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
