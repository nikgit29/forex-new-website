const data = {
  Modal: false,
};

const OPEN_CLOSE_FREE_TRIAL_MODAL = (state = data, action) => {
  if (action.type === "OPEN_FREE_MODAL") {
    return {
      Modal: true,
    };
  } else if (action.type === "CLOSE_FREE_MODAL") {
    return {
      Modal: false,
    };
  } else {
    return state;
  }
};

export default OPEN_CLOSE_FREE_TRIAL_MODAL;
