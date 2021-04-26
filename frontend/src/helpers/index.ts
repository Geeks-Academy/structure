import { ISocial, IUser } from 'Types/interfaces';

export const isStartsWith = (inputText: string, value: string): boolean => {
  const regex = new RegExp(`^${inputText}`, 'i');
  return regex.test(value);
};

export const isObjectEmpty = (obj: Record<string, unknown>): boolean => {
  return Object.keys(obj).length === 0;
};

export const getUserObject = (
  _id = '',
  name = '',
  image = '',
  title = '',
  openToWork = false,
  manager = false,
  active = true,
  boss?: string | null,
  socials?: ISocial[]
): IUser => ({
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
