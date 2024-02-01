export const writeToLocalStorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};
export const readFromLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  if (value) return JSON.parse(value);
  return null;
};
