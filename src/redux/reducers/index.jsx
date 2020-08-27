const initialState = {
  tasks: []
};

export const state = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };
    default:
      return state;
  }
};
