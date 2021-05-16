import axios from 'axios';

const url = process.env.REACT_APP_URL_API;

export const axiosInstance = axios.create({
  baseURL: url,
});
