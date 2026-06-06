const data = {
  Modal: false,
};

const OPEN_CLOSE_LOCK_RATE = (state = data, action) => {
  if (action.type === "OPEN_LOCK_RATE_MODAL") {
    return {
      Modal: true,
    };
  } else if (action.type === "CLOSE_LOCK_RATE_MODAL") {
    return {
      Modal: false,
    };
  } else {
    return state;
  }
};

export default OPEN_CLOSE_LOCK_RATE;
