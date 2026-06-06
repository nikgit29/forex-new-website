import axios from "axios";

const ALL_CURRENCY_DETAILS = () => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "GET",
        url: "https://exchange-live.forexblues.com/getdata",
        headers: {
          Accept: "application/json",
        },
      });

      dispatch({
        type: "ALL_CURRENCY_DETAILS",
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
export default ALL_CURRENCY_DETAILS;
