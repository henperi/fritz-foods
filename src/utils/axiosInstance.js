import axios from 'axios';
import baseApi from '../constants';

const axiosInstance = axios.create({
  baseURL: `${baseApi}/api/v1`,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export const setAxiosToken = (token) => {
  axiosInstance.defaults.headers.common['x-access-token'] = token;
};

export default axiosInstance;
