const CLOSE_SIGNUP_OTP_MODAL = () => {
  return (dispatch) => {
    dispatch({
      type: "CLOSE_SIGNUP_OTP_MODAL",
    });
  };
};

export default CLOSE_SIGNUP_OTP_MODAL;
