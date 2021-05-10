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
export interface IUserOptions {
  name: string;
  value: string;
}

export interface IAttributes<T> extends React.HTMLAttributes<T>, React.RefAttributes<T> {}
