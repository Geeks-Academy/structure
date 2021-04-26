import { IUser } from 'Types/interfaces';
import { Fetcher } from '../Fetcher';

export class UserRequests {
  static getAllUsers = async () => {
    return Fetcher.get('users');
  };

  static getUser = async (id: string) => {
    return Fetcher.get(`users/${id}`);
  };

  static updateUser = async (data: IUser) => {
    return Fetcher.put(`users/${data._id}`, data);
  };

  static createUser = async (data: IUser) => {
    return Fetcher.post(`users`, data);
  };
}
