import request from "lib/request"
import swal from "sweetalert2"
import { showErrorWithCode } from 'components/common'
export const GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS'
export const GET_USER_PROFILE_FAIL = 'GET_USER_PROFILE_FAIL'
export const IS_GET_API = 'IS_GET_API'


export const isGetApi = () => {
  return {
    type: IS_GET_API
  }
}

//get profile
export const getUserProfile = (username) => {
  return (dispatch, getState) => {
    dispatch(isGetApi());
    request('users/'+username).then(function (response) {
      if (response.id) {
        dispatch(getUserProfileSuccess(response));
      } else {
        swal({
          title: 'Message',
          html: '<p class="pop-content">'+response+'</p>',
          animation: false,
          customClass: 'animated zoomIn has-btn',
          showCancelButton: false,
          confirmButtonText: 'OK',
          reverseButtons: true,
      })
        dispatch(getUserProfileFail(response));
      }
    })
  }
}
export const getUserProfileSuccess = (response) => {
  return {
    type: GET_USER_PROFILE_SUCCESS,
    payload: response
  }
}
export const getUserProfileFail = (response) => {
  return {
    type: GET_USER_PROFILE_FAIL,
    payload: response
  }
}
