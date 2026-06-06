const data = {
  open: false,
};

const OPEN_CLOSE_SIGNUP_OTP_MODAL = (state = data, action) => {
  if (action.type === "OPEN_SIGNUP_OTP_MODAL") {
    return {
      open: true,
    };
  } else if (action.type === "CLOSE_SIGNUP_OTP_MODAL") {
    return {
      open: false,
    };
  } else {
    return state;
  }
};

export default OPEN_CLOSE_SIGNUP_OTP_MODAL;
