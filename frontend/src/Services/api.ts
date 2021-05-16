import axios from 'axios';

const url = process.env.REACT_APP_URL_API;
console.log(process.env)

export const axiosInstance = axios.create({
  baseURL: url,
});
