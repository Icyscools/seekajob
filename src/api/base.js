import axios from 'axios';

const API_SERVER = process.env.REACT_APP_API_SERVER;

const baseAPI = axios.create({
  baseURL: `${API_SERVER}`,
});

baseAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  const { Authorization } = config.headers;
  config.headers.Authorization = Authorization ? Authorization : `Bearer ${token}`;
  return config;
});

export default baseAPI;
