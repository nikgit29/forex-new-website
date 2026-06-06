const data = {
  state: false,
};

const MOB_OPEN_CLOSE_SIGNUP_MODAL = (state = data, action) => {
  if (action.type === "OPEN_MOB_SIGNUP_MODAL") {
    return {
      ...state,
      state: true,
    };
  } else if (action.type === "CLOSE_MOB_SIGNUP_MODAL") {
    return {
      ...state,
      state: false,
    };
  } else {
    return state;
  }
};

export default MOB_OPEN_CLOSE_SIGNUP_MODAL;
