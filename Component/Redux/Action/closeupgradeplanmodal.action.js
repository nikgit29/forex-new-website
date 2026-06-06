const CLOSE_UPGRADE_PLAN_MODAL = () => {
  return (dispatch) => {
    dispatch({
      type: "CLOSE_UPGRADE_MODAL",
    });
  };
};

export default CLOSE_UPGRADE_PLAN_MODAL;
