const OPEN_REQUEST_CALLBACK = () => {
  return (dispatch) => {
    dispatch({
      type: "OPEN_REQUEST_CALLBACK",
    });
  };
};

export default OPEN_REQUEST_CALLBACK;
