import axios from "axios";
import Cookies from "universal-cookie";
import useAxios from "../../Hooks/useAxios";
const GET_WEEKLY_FORCASTE = (mudra) => {
  const cookies = new Cookies();

  return async (dispatch) => {
    const accound_id = cookies.get("personId");
    try {
      const response = await axios({
        method: "POST",
        url: "/future-forecast-v3.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s",
        data: { mudra: mudra, account_id: accound_id },
        headers: {
          Accept: "application/json",
        },
      });
      dispatch({
        type: "GET_WEEKLY_FORCASTE",
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
export default GET_WEEKLY_FORCASTE;
