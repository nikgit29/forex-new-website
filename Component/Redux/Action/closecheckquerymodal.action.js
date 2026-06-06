const CLOSE_CHECK_QUERY_MODAL = () => {
  return (dispatch) => {
    dispatch({
      type: "CLOSE_CHECK_QUERY_MODAL",
    });
  };
};

export default CLOSE_CHECK_QUERY_MODAL;
