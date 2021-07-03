import { AxiosResponse } from 'axios';
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
    if (data.boss?.length === 0) {
      data.boss = null;
    }
    if (data.socials.length !== 0) {
      data.socials = data.socials
        .map((social: any) => {
          if (social.social.name) {
            social.social = social.social._id;
          }
          return social;
        })
        .filter((social: any) => Boolean(social.link));
    }
    return Fetcher.put(`/users/${_id}`, data);
  };

  static postImage = async (data: any): Promise<any> => {
    return Fetcher.post('/users/uploadImage', data);
  };

  static deactivate = async (
    id: string
  ): Promise<AxiosResponse<{ ok: boolean; message: string }>> => {
    return Fetcher.put(`/users/deactivate/${id}`);
  };
}
