export interface Social {
  name: string;
  image: string;
  active: boolean;
}

export interface Socials {
  link: string;
  social: Social;
}

export interface User {
  id: number;
  email: string;
  name: string;
  title: string;
  openToWork: boolean;
  manager: boolean;
  active: boolean;
  image: string;
  boss: boolean;
  socials: Socials[];
}

export interface IChildren {
  children: React.ReactNode;
}
