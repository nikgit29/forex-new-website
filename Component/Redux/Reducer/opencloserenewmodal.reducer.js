const data = {
  Modal: false,
};

const OPEN_CLOSE_RENEW_MODAL = (state = data, action) => {
  if (action.type === "OPEN_MODAL") {
    return {
      Modal: true,
    };
  } else if (action.type === "CLOSE_MODAL") {
    return {
      Modal: false,
    };
  } else {
    return state;
  }
};

export default OPEN_CLOSE_RENEW_MODAL;
