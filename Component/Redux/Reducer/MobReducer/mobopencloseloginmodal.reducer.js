const data = {
  status: false,
};

const MOB_OPEN_CLOSE_LOGIN_MODAL = (state = data, action) => {
  if (action.type === "MOB_OPEN_LOGIN_MODAL") {
    return {
      ...state,
      status: true,
    };
  } else if (action.type === "MOB_CLOSE_LOGIN_MODAL") {
    return {
      ...state,
      status: false,
    };
  } else {
    return state;
  }
};

export default MOB_OPEN_CLOSE_LOGIN_MODAL;
