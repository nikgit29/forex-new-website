const OPEN_UPGRADE_PLAN_MODAL = () => {
  return (dispatch) => {
    dispatch({
      type: "OPEN_UPGRADE_MODAL",
    });
  };
};

export default OPEN_UPGRADE_PLAN_MODAL;
