const data = {
  open: false,
};

const OPEN_CLOSE_UPGRADE_PLAN_MODAL = (state = data, action) => {
  if (action.type === "OPEN_CHECK_QUERY_MODAL") {
    return {
      open: true,
    };
  } else if (action.type === "CLOSE_CHECK_QUERY_MODAL") {
    return {
      open: false,
    };
  } else {
    return state;
  }
};

export default OPEN_CLOSE_UPGRADE_PLAN_MODAL;
