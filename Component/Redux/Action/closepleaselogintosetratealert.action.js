const CLOSE_LOGIN_TO_SET_ALERT = () => {
  return (dispatch) => {
    dispatch({
      type: "CLOSE_ALERT",
    });
  };
};

export default CLOSE_LOGIN_TO_SET_ALERT;
