const data = {
  open: false,
};

const OPEN_CLOSE_CONTACT_MODAL = (state = data, action) => {
  if (action.type === "OPEN_CONTACT_MODAL") {
    return {
      open: true,
    };
  } else if (action.type === "CLOSE_CONTACT_MODAL") {
    return {
      open: false,
    };
  } else {
    return state;
  }
};

export default OPEN_CLOSE_CONTACT_MODAL;
