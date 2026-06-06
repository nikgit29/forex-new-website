const Modal = {
  data: [],
};

const GET_WEEKLY_FORCASTE = (state = Modal, action) => {
  if (action.type === "GET_WEEKLY_FORCASTE") {
    return {
      ...state,
      data: action.payload,
    };
  } else {
    return state;
  }
};

export default GET_WEEKLY_FORCASTE;
