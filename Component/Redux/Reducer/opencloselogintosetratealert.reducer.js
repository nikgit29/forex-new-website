const data = {
  Modal: false,
};

const OPEN_CLOSE_LOGIN_TO_SET_ALERT = (state = data, action) => {
  if (action.type === "OPEN_ALERT") {
    return {
      Modal: true,
    };
  } else if (action.type === "CLOSE_ALERT") {
    return {
      Modal: false,
    };
  } else {
    return state;
  }
};

export default OPEN_CLOSE_LOGIN_TO_SET_ALERT;
