const CLOSE_SIGNUP_MODAL = () => {
  return (dispatch) => {
    dispatch({
      type: "CLOSE_SIGNUP_MODAL",
    });
  };
};

export default CLOSE_SIGNUP_MODAL;
