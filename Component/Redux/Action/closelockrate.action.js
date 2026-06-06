const CLOSE_LOCK_RATE_MODAL = () => {
  return (dispatch) => {
    dispatch({
      type: "CLOSE_LOCK_RATE_MODAL",
    });
  };
};

export default CLOSE_LOCK_RATE_MODAL;
