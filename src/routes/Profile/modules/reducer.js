import {
  IS_GET_API,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAIL,
} from './actions'

const initialState = {

  loading: false,
  userProfile:null,
}

export default function eventReducer(state = initialState, action) {
  switch (action.type) {

    case IS_GET_API:
      return {
        ...state,
        loading: true
      }
      break;

    case GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        userProfile:action.payload
      }
      break;
    case GET_USER_PROFILE_FAIL:
      console.log(action.payload)
      return {
        ...state,
        loading: false,
      }
      break;
    default:
      return state
  }
}
