const data = {
  open: false,
};

const OPEN_CLOSE_MODAL = (state = data, action) => {
  if (action.type === "OPEN_LOGIN_MODAL") {
    return {
      ...state,
      open: true,
    };
  } else if (action.type === "CLOSE_LOGIN_MODAL") {
    return {
      ...state,
      open: false,
    };
  } else {
    return state;
  }
};

export default OPEN_CLOSE_MODAL;
