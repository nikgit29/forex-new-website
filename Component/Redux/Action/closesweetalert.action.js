const CLOSE_SWEET_ALERT = () => {
  return (dispatch) => {
    dispatch({
      type: "CLOSE_SWEET_ALERT",
    });
  };
};

export default CLOSE_SWEET_ALERT;
