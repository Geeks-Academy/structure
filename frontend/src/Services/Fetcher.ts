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
}
