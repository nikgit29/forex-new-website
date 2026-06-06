const data = {};

const SET_ALERT = (state = data, action) => {
  if (action.type === "SET_ALERT") {
    return {
      ...state,
      data: action.payload,
    };
  } else {
    return state;
  }
};

export default SET_ALERT;
