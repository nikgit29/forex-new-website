const data = {
  Modal: false,
};

const OPEN_CLOSE_UNSUBSCRIBE_USER = (state = data, action) => {
  if (action.type === "OPEN_UNSUBSCRIBE_USER_MODAL") {
    return {
      Modal: true,
    };
  } else if (action.type === "CLOSE_UNSUBSCRIBE_USER_MODAL") {
    return {
      Modal: false,
    };
  } else {
    return state;
  }
};

export default OPEN_CLOSE_UNSUBSCRIBE_USER;
