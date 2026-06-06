const data = {
  open: false,
};
const OPEN_CLOSE_REQUEST_CALLBACK = (state = data, action) => {
  if (action.type === "OPEN_REQUEST_CALLBACK") {
    return {
      open: true,
    };
  } else if (action.type === "CLOSE_REQUEST_CALLBACK") {
    return {
      open: false,
    };
  } else {
    return state;
  }
};

export default OPEN_CLOSE_REQUEST_CALLBACK;
