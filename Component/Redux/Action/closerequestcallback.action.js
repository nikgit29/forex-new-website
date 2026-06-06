const CLOSE_REQUEST_CALLBACK = () => {
  return (dispatch) => {
    dispatch({
      type: "CLOSE_REQUEST_CALLBACK",
    });
  };
};

export default CLOSE_REQUEST_CALLBACK;
