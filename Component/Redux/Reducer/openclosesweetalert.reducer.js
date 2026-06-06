const data = {
  sweet: false,
};

const OPEN_CLOSE_SWEET_ALERT = (state = data, action) => {
  if (action.type === "OPEN_SWEET_ALERT") {
    return {
      sweet: true,
    };
  } else if (action.type === "CLOSE_SWEET_ALERT") {
    return {
      sweet: false,
    };
  } else {
    return state;
  }
};

export default OPEN_CLOSE_SWEET_ALERT;
