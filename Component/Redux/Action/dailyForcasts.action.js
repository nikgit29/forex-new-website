import axios from "axios";
import useAxios from "../../Hooks/useAxios";
const DAILY_FORCASTS = () => {
  return async (dispatch) => {
    try {
       console.trace("DAILY_FORCASTS CALLED");
       
      const response = await axios({
        method: "GET",
        url: "/currency-open-close-v2.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s",
      });

      console.log("DAILY API RESPONSE", response.data);

      dispatch({
        type: "DAILY_FORCASTS",
        payload: Array.isArray(response.data)
          ? response.data
          : [],
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export default DAILY_FORCASTS;
