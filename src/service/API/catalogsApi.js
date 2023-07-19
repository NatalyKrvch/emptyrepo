import axios from 'axios';
const baseURL = import.meta.env.VITE_BASE_URL;

export const getCatalogsAPI = (page, per_page) => {
  axios.defaults.baseURL = `${baseURL}`;
  if (page && per_page) {
    return axios.get(`/api/catalogs?page=${page}&per_page=${per_page}`).then(({ data }) => {
      return data;
    });
  }
  return axios.get('/api/catalogs').then(({ data }) => {
    return data;
  })
};

export const addCatalogAPI = catalog => {
  console.log(axios.defaults.baseURL);
  axios.defaults.baseURL = `${baseURL}`;
  return axios.post("/api/catalogs/", catalog).then(({ data }) => {
    return data;
  });
};

export const removeCatalogAPI = (id) => {
  axios.defaults.baseURL = `${baseURL}`;
  return axios.delete(`/api/catalogs/${id}`).then(({ data }) => {
    return data;
  });
};

export const changeCatalogAPI = (id, catalog) => {
  axios.defaults.baseURL = `${baseURL}`;
  return axios.put(`/api/catalogs/${id}`, catalog).then(({ data }) => {
    return data;
  });
};


