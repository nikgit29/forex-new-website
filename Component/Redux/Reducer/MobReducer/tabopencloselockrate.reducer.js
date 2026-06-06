const data = {
  Box: false,
};

const TAB_OPEN_CLOSE_LOCK_RATE = (state = data, action) => {
  if (action.type === "TAB_OPEN_LOCK_RATE_MODAL") {
    return {
      Box: true,
    };
  } else if (action.type === "TAB_CLOSE_LOCK_RATE_MODAL") {
    return {
      Box: false,
    };
  } else {
    return state;
  }
};

export default TAB_OPEN_CLOSE_LOCK_RATE;
