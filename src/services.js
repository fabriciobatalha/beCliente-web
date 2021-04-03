// chat se logado

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://10.0.0.109:8000/api"
});

axiosInstance.interceptors.request.use(
  function(config) {
    const token = window.localStorage.token;
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
  login(body) {
    return axios.post("http://10.0.0.109:8000/api/fazer-login", body);
  },
  validateToken() {
    return axiosInstance.post("http://10.0.0.109:8000/api/validar-token");
  }
};

export function getCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}
