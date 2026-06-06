const OPEN_FORGET_PASSWORD_MODAL = () => {
  return (dispatch) => {
    dispatch({
      type: "OPEN_FORGET_PASSWORD_MODAL",
    });
  };
};

export default OPEN_FORGET_PASSWORD_MODAL;
