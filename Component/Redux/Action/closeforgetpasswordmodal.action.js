const CLOSE_FORGET_PASSWORD_MODAL = () => {
  return (dispatch) => {
    dispatch({
      type: "CLOSE_FORGET_PASSWORD_MODAL",
    });
  };
};

export default CLOSE_FORGET_PASSWORD_MODAL;
