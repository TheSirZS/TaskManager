export const ADD_TASK = (task) => {
  return {
    type: 'ADD_TASK',
    payload: task
  }
}

export const SHOW_MODAL = (active) => {
  return {
    type: 'SHOW_MODAL',
    payload: active
  }
}

export const HIDE_MODAL = (active) => {
  return {
    type: 'HIDE_MODAL',
    payload: active
  }
}