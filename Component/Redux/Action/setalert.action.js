import axios from "axios";
import useAxios from "../../Hooks/useAxios";
// const slug = null;
const SET_ALERT = (fbsToken) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "POST",
        url: "/get_rate_alert_data_web.php",
        data: {
          firebase_token: fbsToken,
        },
      });
      dispatch({
        type: "SET_ALERT",
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export default SET_ALERT;
