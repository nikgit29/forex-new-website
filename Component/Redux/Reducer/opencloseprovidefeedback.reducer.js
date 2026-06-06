const data = {
  open: false,
};

const OPEN_CLOSE_PROVIDE_FEEDBACK = (state = data, action) => {
  if (action.type === "OPEN_PROVIDE_FEEDBACK") {
    return {
      open: true,
    };
  } else if (action.type === "CLOSE_PROVIDE_FEEDBACK") {
    return {
      open: false,
    };
  } else {
    return state;
  }
};

export default OPEN_CLOSE_PROVIDE_FEEDBACK;
