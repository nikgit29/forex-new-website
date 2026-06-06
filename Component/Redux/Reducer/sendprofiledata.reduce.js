const data = {};

const SEND_PROFILE_DATA = (state = data, action) => {
  if (action.type === "SEND_PROFILE_DATA") {
    return {
      ...state,
      data: action.payload,
    };
  } else {
    return state;
  }
};

export default SEND_PROFILE_DATA;
