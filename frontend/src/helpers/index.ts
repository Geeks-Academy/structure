export const isStartsWith = (inputText: string, value: string): boolean => {
  const regex = new RegExp(`^${inputText}`, 'i');
  return regex.test(value);
};
