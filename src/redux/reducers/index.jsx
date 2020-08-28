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
        loading: true,
      };
    case "FINISH_REQUEST":
      return {
        ...state,
        loading: false
      };
    case "SET_USER":
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case "SET_TASKS":
      return {
        ...state,
        loading: false,
        tasks: payload,
      }
    default:
      return state;
  }
};
