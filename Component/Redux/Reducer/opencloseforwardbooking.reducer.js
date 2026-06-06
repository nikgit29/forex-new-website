const data = {
  Modal: false,
};

const OPEN_CLOSE_FORWARD_BOOKING = (state = data, action) => {
  if (action.type === "OPEN_FORWARD_BOOKING") {
    return {
      Modal: true,
    };
  } else if (action.type === "CLOSE_FORWARD_BOOKING") {
    return {
      Modal: false,
    };
  } else {
    return state;
  }
};

export default OPEN_CLOSE_FORWARD_BOOKING;
