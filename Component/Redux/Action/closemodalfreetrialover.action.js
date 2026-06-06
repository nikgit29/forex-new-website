const CLOSE_FREE_TRIAL_MODAL = () => {
  return (dispatch) => {
    dispatch({
      type: "CLOSE_FREE_MODAL",
    });
  };
};

export default CLOSE_FREE_TRIAL_MODAL;
