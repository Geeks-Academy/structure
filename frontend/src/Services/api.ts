import axios from 'axios'

const DEVELOPMENT_URL = 'http://localhost:4000/api/';

export const axiosInstance = axios.create({
    baseURL: DEVELOPMENT_URL
});
