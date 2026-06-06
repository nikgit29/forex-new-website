const Modal = {
  data: [],
};

const DAILY_FORCASTS = (state = Modal, action) => {
  if (action.type === "DAILY_FORCASTS") {
    return {
      ...state,
      data: action.payload,
    };
  } else {
    return state;
  }
};

export default DAILY_FORCASTS;
