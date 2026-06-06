const CLOSE_LOGIN_MODAL = () => {
  return (dispatch) => {
    dispatch({
      type: "CLOSE_LOGIN_MODAL",
    });
  };
};

export default CLOSE_LOGIN_MODAL;
