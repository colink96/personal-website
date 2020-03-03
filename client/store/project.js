import axios from 'axios'

const initialState = {allProjects: [], singleProject: {}}

//ACTION TYPES

const GET_ALL_PROJECTS = 'GET_ALL_PROJECTS'
const GET_ONE_PROJECT = 'GET_ONE_PROJECT'

//ACTION CREATORS

const gotAllProjects = projects => {
  return {
    type: GET_ALL_PROJECTS,
    projects
  }
}

const gotOneProject = project => {
  return {
    type: GET_ONE_PROJECT,
    project
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

export const getOneProject = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/projects/${id}`)
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
    case GET_ONE_PROJECT:
      return {...state, singleProject: action.project}
    default:
      return state
  }
}
