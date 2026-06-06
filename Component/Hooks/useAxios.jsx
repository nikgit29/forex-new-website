import axios from "axios";

// axios.defaults.baseURL = "https://cms.cybertizeweb.com/forexblues-v2/json/api";
axios.defaults.baseURL = "https://cms.forexblues.com/json/api";

const useAxios = () => {
  return axios;
};

export default useAxios;
