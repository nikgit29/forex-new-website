const Modal = {
  data: [],
};

const ALL_CURRENCY_DETAILS = (state = Modal, action) => {
  if (action.type === "ALL_CURRENCY_DETAILS") {
    return {
      ...state,
      data: action.payload,
    };
  } else {
    return state;
  }
};

export default ALL_CURRENCY_DETAILS;
