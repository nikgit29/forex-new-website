const CLOSE_PROVIDE_FEEDBACK = () => {
  return (dispatch) => {
    dispatch({
      type: "CLOSE_PROVIDE_FEEDBACK",
    });
  };
};

export default CLOSE_PROVIDE_FEEDBACK;
