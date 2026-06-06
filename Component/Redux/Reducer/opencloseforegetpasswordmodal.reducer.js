const data = {
  open: false,
};

const OPEN_CLOSE_FORGET_PASSWORD_MODAL = (state = data, action) => {
  if (action.type === "OPEN_FORGET_PASSWORD_MODAL") {
    return {
      open: true,
    };
  } else if (action.type === "CLOSE_FORGET_PASSWORD_MODAL") {
    return {
      open: false,
    };
  } else {
    return state;
  }
};

export default OPEN_CLOSE_FORGET_PASSWORD_MODAL;
