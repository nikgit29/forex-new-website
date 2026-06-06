const data = {
  Box: false,
};

const MOB_OPEN_CLOSE_LOCK_RATE = (state = data, action) => {
  if (action.type === "MOB_OPEN_LOCK_RATE_MODAL") {
    return {
      Box: true,
    };
  } else if (action.type === "MOB_CLOSE_LOCK_RATE_MODAL") {
    return {
      Box: false,
    };
  } else {
    return state;
  }
};

export default MOB_OPEN_CLOSE_LOCK_RATE;
