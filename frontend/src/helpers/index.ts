export const isStartsWith = (inputText: string, value: string): boolean => {
  const regex = new RegExp(`^${inputText}`, 'i');
  return regex.test(value);
};

export const replaceUserInfoIntoSelectOptions = (users: any) => {
  return users.data.map((user: any) => ({
    name: user.name,
    value: user._id,
  }));
};

export * from './Variables';
