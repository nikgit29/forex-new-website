const CLOSE_LOGIN_FORWARD_BOOKING = () => {
  return (dispatch) => {
    dispatch({
      type: "CLOSE_FORWARD_BOOKING",
    });
  };
};

export default CLOSE_LOGIN_FORWARD_BOOKING;
