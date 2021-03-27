export interface ISocialPart {
  name: string;
  image: string;
  active: boolean;
}

export interface ISocial {
  link: string;
  social: ISocialPart;
}

export interface IUser {
  id: string;
  name: string;
  image: string;
  email?: string;
  title?: string;
  openToWork?: boolean;
  manager?: boolean;
  active?: boolean;
  boss?: boolean;
  socials?: ISocial[];
}

export interface IChildren {
  children: React.ReactNode;
}
