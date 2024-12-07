import axios from 'axios';
import { API_URL, TOKEN_KEY } from '@/config';
import { Alert, handleLogout } from './utils';

axios.interceptors.request.use(function (config) {
  config.baseURL = API_URL;
  config.headers.Authorization = `Bearer ${localStorage.getItem(TOKEN_KEY)}`;
  return config;
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      Alert('error', 'Logging Out');
      handleLogout();
    }
    if (error.message === 'Network Error') {
      Alert('error', 'Network Error');
    }

    return Promise.reject(error);
  }
);

const exportedObject = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};

export default exportedObject;
