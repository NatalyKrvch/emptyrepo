import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL;

export const getProductsAPI = (page, per_page, article, filter) => {
  axios.defaults.baseURL = `${baseURL}`;
  if (page && per_page) {
    return axios
      .get(
        `/api/products?page=${page}&per_page=${per_page}&article=${article}&filter=${filter}`
      )
      .then(({ data }) => {
        return data;
      });
  }
  return axios.get("/api/products").then(({ data }) => {
    return data;
  });
};

export const addProductAPI = (product) => {
  axios.defaults.baseURL = `${baseURL}`;
  return axios.post("/api/products/", product).then(({ data }) => {
    return data;
  });
};

export const removeProductAPI = (id) => {
  axios.defaults.baseURL = `${baseURL}`;
  return axios.delete(`/api/products/${id}`).then(({ data }) => {
    return data;
  });
};

export const changeProductAPI = (id, product) => {
  axios.defaults.baseURL = `${baseURL}`;
  return axios.put(`/api/products/${id}`, product).then(({ data }) => {
    return data;
  });
};

export const getProductByIdAPI = (id) => {
  axios.defaults.baseURL = `${baseURL}`;
  return axios.get(`/api/products/${id}`).then(({ data }) => {
    return data;
  });
};
