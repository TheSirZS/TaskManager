const initialState = {
  tasks: [],
  loading: true,
  user: null
};

export const state = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ENTER_REQUEST":
      return {
        ...state,
        loading: true
      }
    case "ADD_TASK":
      return {
        ...state,
        loading: false,
        tasks: [...state.tasks, payload],
      };
    case "SET_USER":
      return {
        ...state,
        loading: false,
        user: payload
      }
    default:
      return state;
  }
};

