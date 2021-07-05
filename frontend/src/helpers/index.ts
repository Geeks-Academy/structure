export * from './Variables';

export const isStartsWith = (inputText: string, value: string): boolean => {
  const regex = new RegExp(`${inputText}`, 'i');
  return regex.test(value);
};

export const replaceUserInfoIntoSelectOptions = (users: any) => {
  return users.data.map((user: any) => ({
    name: user.name,
    value: user._id,
  }));
};

export const removeCurrentUser = (currentUser: any, users: any) => {
  return users.filter((user: any) => user.value !== currentUser._id);
};
