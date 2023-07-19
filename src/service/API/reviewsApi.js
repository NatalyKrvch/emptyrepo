import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL;

export const addReviewAPI = (review) => {
  axios.defaults.baseURL = `${baseURL}`;
  return axios.post("/api/reviews/", review).then(({ data }) => {
    return data;
  });
};
