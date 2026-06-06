const CLOSE_RENEW_MODAL = () => {
  return (dispatch) => {
    dispatch({
      type: "CLOSE_MODAL",
    });
  };
};

export default CLOSE_RENEW_MODAL;
