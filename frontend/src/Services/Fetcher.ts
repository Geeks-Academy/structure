import { axiosInstance } from './api';

export class Fetcher {
  static get = (url: string): Promise<any> => {
    return axiosInstance
      .get(url)
      .then((r) => r)
      .catch((err) => ({
        error: true,
        msg: err.message,
        status: err.response.status,
      }));
  };
  
  static post = (url: string, data?: unknown): Promise<any> => {
    return axiosInstance
      .post(url, data)
      .then((r) => r)
      .catch((err) => ({
        error: true,
        msg: err.message,
        status: err.response.status,
      }));
  };

  static put = (url: string, data?: unknown): Promise<any> => {
    return axiosInstance
      .put(url, data)
      .then((r) => r)
      .catch((err) => ({
        error: true,
        msg: err.message,
        status: err.response.status,
      }));
  };
}
