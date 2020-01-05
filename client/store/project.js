import axios from 'axios'

const initialState = {allProjects: [], singleProject: {}}

//ACTION TYPES

const GET_ALL_PROJECTS = 'GET_ALL_PROJECTS'

//ACTION CREATORS

const gotAllProjects = projects => {
  return {
    type: GET_ALL_PROJECTS,
    projects
  }
}

//THUNKS

export const getAllProjects = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/projects')
      dispatch(gotAllProjects(data))
    } catch (error) {
      console.error(error)
    }
  }
}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PROJECTS:
      return {...state, allProjects: action.projects}
    default:
      return state
  }
}
