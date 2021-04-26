import { Fetcher } from '../Fetcher';

export class SocialRequests {
  static getAllSocials = async () => {
    return Fetcher.get('socials');
  };
}
