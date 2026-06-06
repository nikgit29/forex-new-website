import axios from "axios";
import useAxios from "../../Hooks/useAxios";
// const slug = null;
const NEWS_DETAILS = (slug) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "GET",
        url:
          "/get-news-detail.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s&news_slug=" +
          slug,
      });
      dispatch({
        type: "NEWS_DETAILS",
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export default NEWS_DETAILS;
