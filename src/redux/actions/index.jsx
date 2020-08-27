import { Firebase } from "../../config/firebase"

export const ADD_TASK = (task) => {
  return {
    type: 'ADD_TASK',
    payload: task
  }
}

export const GET_USER = () => (dispatch) => {
  dispatch(ENTER_REQUEST());
  Firebase.checkAuthUser((user) => {
    if (user) dispatch(SET_USER(user))
    else dispatch(SET_USER(null))
  });
}

export const SET_USER = (user) => {
  return {
    type: 'SET_USER',
    payload: user
  }
}

const ENTER_REQUEST = () => {
  return {
    type: 'ENTER_REQUEST'
  }
}