import axios from 'axios';

const baseAPI = 'https://api.b7web.com.br/devbarber/api';

const api = axios.create({
  baseURL: baseAPI,
  timeout: 3000,
  headers:{
    Accept: 'application/json',
   'Content-Type': 'application/json',
  }
});

export default api;