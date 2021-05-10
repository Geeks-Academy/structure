import { Fetcher } from '../Fetcher';

export class UserRequests {
  static getAllUsers = async (): Promise<any> => {
    return Fetcher.get('/users');
  };

  static createUser = async (data: any): Promise<any> => {
    if (data.boss?.length === 0) {
      data.boss = null;
    }
    return Fetcher.post(`/users`, data);
  };

  static getUser = async (id: string): Promise<any> => {
    return Fetcher.get(`/users/${id}`);
  };

  static updateUser = async ({ _id, __v, ...data }: any): Promise<any> => {
    return Fetcher.put(`/users/${_id}`, data);
  };
}
