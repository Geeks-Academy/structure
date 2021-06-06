import { Fetcher } from '../Fetcher';

export class SocialRequests {
  static getAllSocials = async (): Promise<any> => {
    return Fetcher.get('/socials');
  };
}
