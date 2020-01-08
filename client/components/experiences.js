import React from 'react'
import {connect} from 'react-redux'
import {getAllExperiences} from '../store/experience'

class DisconnectedExperience extends React.Component {
  componentDidMount() {
    this.props.getAllExperiences()
  }
  render() {
    return (
      <div>
        <h1>Experience</h1>
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
    getAllExperiences: () => dispatch(getAllExperiences)
  }
}
