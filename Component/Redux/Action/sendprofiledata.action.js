import axios from "axios";
import useAxios from "../../Hooks/useAxios";
const SEND_PROFILE_DATA = (accountId) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "POST",
        url: "/account-details-v2.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s",
        data: { accountId: accountId },
      });
      dispatch({
        type: "SEND_PROFILE_DATA",
        payload: response.data[0],
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export default SEND_PROFILE_DATA;
