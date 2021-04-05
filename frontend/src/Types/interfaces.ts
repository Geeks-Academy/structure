export interface ISocialPart {
  name: string;
  image: string;
  active: boolean;
}

export interface IBoss {
  _id: string;
}

export interface ISocial {
  link: string;
  social: ISocialPart;
}

export interface IUser {
  _id?: string;
  name?: string;
  image?: string;
  title?: string;
  openToWork?: boolean;
  manager?: boolean;
  active?: boolean;
  boss?: IBoss[] | null;
  socials?: ISocial[];
}

export interface IChildren {
  children: React.ReactNode;
}
