import { Fetcher } from '../Fetcher';

export class UserRequests {
  static getAllUsers = async () => {
    return Fetcher.get('/users');
  };
}
