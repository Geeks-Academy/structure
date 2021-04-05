import { IBoss, ISocial } from "Types/interfaces";

export const isObjectEmpty = (obj: Object) => {
  return Object.keys(obj).length === 0;
};

export const getUserObject = (
  _id: string = "",
  name: string = "",
  image: string = "",
  title?: string,
  openToWork?: boolean,
  manager?: boolean,
  active?: boolean,
  boss?: string | null,
  socials?: ISocial[]
) => ({
  _id,
  name,
  image,
  title,
  openToWork,
  manager,
  active,
  boss,
  socials,
});
