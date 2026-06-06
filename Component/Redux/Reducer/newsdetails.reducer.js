const data = {};

const NEWS_DETAILS = (state = data, action) => {
  if (action.type === "NEWS_DETAILS") {
    return {
      ...state,
      data: action.payload,
    };
  } else {
    return state;
  }
};

export default NEWS_DETAILS;
