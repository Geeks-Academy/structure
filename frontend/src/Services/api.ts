import axios from 'axios';
import env from 'env';

const url = env.REACT_APP_API_URL;

export const axiosInstance = axios.create({
  baseURL: url,
});
