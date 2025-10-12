import axios from 'axios';

const api = axios.create({
  // baseURL: `${process.env.API}`,  // only base URL here
  baseURL: `http://192.168.29.233:4000/api/`,  // only base URL here
});

export default api;