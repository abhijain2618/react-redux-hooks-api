import axios from "axios";
const candidateApi = axios.create({
  baseURL: "https://sumit-back-end-env.herokuapp.com/api/v1",
});
export default candidateApi;
