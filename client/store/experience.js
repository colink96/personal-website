import axios from 'axios'

const initialState = {allExperiences: []}

//ACTION TYPES

const GET_ALL_EXPERIENCES = 'GET_ALL_EXPERIENCES'

//ACTION CREATORS

const gotAllExperiences = experiences => {
  return {
    type: GET_ALL_EXPERIENCES,
    experiences
  }
}

//THUNKS

export const getAllExperiences = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/experience')
      dispatch(gotAllExperiences(data))
    } catch (error) {
      console.error(error)
    }
  }
}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_EXPERIENCES:
      return {...state, allExperiences: action.experiences}
    default:
      return state
  }
}
