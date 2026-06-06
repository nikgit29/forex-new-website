import axios from "axios";
import useAxios from "../../Hooks/useAxios";
const COMMODITY_WEEKLY_FORECAST = () => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "GET",
        url: "/commodity-weeklyforecast-v2.php",
      });
      dispatch({
        type: "COMMODITY_WEEKLY_FORECAST",
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export default COMMODITY_WEEKLY_FORECAST;
