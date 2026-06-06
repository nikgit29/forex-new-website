const CLOSE_UNSUBSCRIBE_USER_MODAL = () => {
  return (dispatch) => {
    dispatch({
      type: "CLOSE_UNSUBSCRIBE_USER_MODAL",
    });
  };
};

export default CLOSE_UNSUBSCRIBE_USER_MODAL;
