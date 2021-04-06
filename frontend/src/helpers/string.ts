export const isInputTextMatch = (inputText: string, value: string) => {
    const regex = new RegExp(`^${inputText}`, 'i');
    return regex.test(value);
};
