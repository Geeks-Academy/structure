export interface ISocialPart {
  _id: string;
  name: string;
  image: string;
  active: boolean;
}
export interface ISocial {
  _id?: string;
  link: string;
  social: ISocialPart;
}
export interface IUser {
  _id?: string;
  name: string;
  image?: string;
  title?: string;
  openToWork?: boolean;
  manager?: boolean;
  active?: boolean;
  boss?: string | null;
  socials?: ISocial[];
}

export interface IChildren {
  children: React.ReactNode;
}
