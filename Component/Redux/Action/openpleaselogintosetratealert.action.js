const OPEN_LOGIN_TO_SET_ALERT = () => {
  return (dispatch) => {
    dispatch({
      type: "OPEN_ALERT",
    });
  };
};

export default OPEN_LOGIN_TO_SET_ALERT;
