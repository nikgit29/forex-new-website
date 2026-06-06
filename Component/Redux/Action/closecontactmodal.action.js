const CLOSE_CONTACT_MODAL = () => {
  return (dispatch) => {
    dispatch({
      type: "CLOSE_CONTACT_MODAL",
    });
  };
};

export default CLOSE_CONTACT_MODAL;
